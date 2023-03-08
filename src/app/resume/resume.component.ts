import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../service/experiencia.service';
import { Experiencia } from '../model/experiencia';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { EstudiosService } from '../service/estudios.service';
import { Estudios } from '../model/estudios';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  expe: Experiencia[] = [];
  edu: Estudios[] = [];
  isLogged=false;

  constructor(private sExperiencia: ExperienciaService, public router: Router, activatedroute: ActivatedRoute, private sEstudios: EstudiosService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    this.cargarEstudios();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else {
      this.isLogged = false;
    }
  }
cargarExperiencia(): void{
  this.sExperiencia.lista().subscribe(
    data => {this.expe = data;} );
}

cargarEstudios(): void{
  this.sEstudios.lista().subscribe(
    data => {this.edu = data;} );
}

//metodo delete de experiencia laboral
delete(id:number){
  if(id !=undefined){
    this.sExperiencia.delete(id).subscribe(
      data=>{
        this.cargarExperiencia();
        window.location.reload();
      }, err => {
        alert ("failed to delete component")
        window.location.reload();
      }
    )
  }
}

//metodo delete de estudios

eliminar(id:number){
  if(id !=undefined){
    this.sEstudios.delete(id).subscribe(
      data=>{
        this.cargarEstudios();
        window.location.reload();
      }, err => {
        window.location.reload();
      }
    )
  }
}

}
