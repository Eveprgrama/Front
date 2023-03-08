import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EditHardskillsComponent } from '../Modales/edit-hardskills/edit-hardskills.component';
import { Hardskills } from '../model/hardskills';
import { HardskillsService } from '../service/hardskills.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit {
  porcentaje: Hardskills[] = [];
  isLogged=false;

  constructor(private sHardskills:HardskillsService, public router: Router, activatedroute: ActivatedRoute, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarPorcentaje();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPorcentaje(): void {
    this.sHardskills.lista().subscribe(data =>
      {this.porcentaje = data});
  }

  delete(id:number){
    if(id !=undefined){
      this.sHardskills.delete(id).subscribe(
        data=>{
          this.cargarPorcentaje();
          window.location.reload();
        }, err => {
          window.location.reload();
        }
      )
    }
  }

}
