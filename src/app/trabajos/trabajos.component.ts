import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Trabajos } from '../model/trabajos';
import { TrabajosService } from '../service/trabajos.service';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {
  worklist:Trabajos[] = [];
  isLogged=false;

  constructor(private sTrabajos: TrabajosService, public router: Router, activatedroute: ActivatedRoute, private tokenService: TokenService) { }

  ngOnInit(): void{
    this.cargarTrabajos();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else {
      this.isLogged = false;
    }
  }
  cargarTrabajos(): void {
    this.sTrabajos.lista().subscribe(data =>
      {this.worklist = data});
  }

  delete(id:number){
    if(id !=undefined){
      this.sTrabajos.delete(id).subscribe(
        data=>{
          this.cargarTrabajos();
          window.location.reload();
        }, err => {
          window.location.reload();
        }
      )
    }
  }

}
