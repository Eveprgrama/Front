import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Softskills } from '../model/softskills';
import { SoftskillsService } from '../service/softskills.service';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-softskills',
  templateUrl: './softskills.component.html',
  styleUrls: ['./softskills.component.css']
})
export class SoftskillsComponent implements OnInit {
 habilidades: Softskills[] = [];
 isLogged=false;

  constructor(private sSoftskills: SoftskillsService, public router: Router, activatedroute: ActivatedRoute, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarSoft();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSoft(): void {
    this.sSoftskills.lista().subscribe(data =>
      {this.habilidades = data});
  }

  delete(id:number){
    if(id !=undefined){
      this.sSoftskills.delete(id).subscribe(
        data=>{
          this.cargarSoft();
          window.location.reload();
        }, err => {
          window.location.reload();
        }
      )
    }
  }

}
