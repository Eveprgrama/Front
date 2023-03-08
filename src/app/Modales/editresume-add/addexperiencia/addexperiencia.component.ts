import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-addexperiencia',
  templateUrl: './addexperiencia.component.html',
  styleUrls: ['./addexperiencia.component.css']
})
export class AddexperienciaComponent implements OnInit {
  form: UntypedFormGroup;
  nombreE:'';
  descripcionE:'';
  inicio:'';
  fin:'';
  localidad:'';
  img:'';
  public formcontrol: UntypedFormControl;
  isLogged=false;


  constructor(public router: Router, private sExperiencia: ExperienciaService, private FormBuilder: UntypedFormBuilder, private tokenService: TokenService) { 
    this.form= this.FormBuilder.group({
      nombreE:['', [Validators.required]],
       descripcionE : [''],
       inicio : [''],
       fin : [''],
       localidad : [''],
       img: [''],
    })
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else {
      this.isLogged = false;
    }
  }
  //declaracion para las validaciones 
  get NombreE() {
    return this.form.get("nombreE")
   }
 
   get DescripcionE(){
    return this.form.get("DescripcionE")
   }
   
   get Inicio(){
    return this.form.get("inicio")
   }
 
   get Fin(){
    return this.form.get("fin")
   }
 
   get Localidad(){
    return this.form.get("localidad")
   }
  
   get Img(){
    return this.form.get("img")
   }
   
   get NombreEValid(){
    return this.NombreE.touched && !this.NombreE.valid;
  }
 
 submitData(): void{
const expe = new Experiencia(this.nombreE, this.descripcionE, this.inicio, this.fin, this.localidad, this.img);
this.sExperiencia.save(expe).subscribe(
  data=>{
    console.log("agregada")
  alert ("Experiencia añadida")
  window.location.reload();
}, err =>{
  alert ("Todo listo!")
  window.location.reload();
})
};

 limpiar():void{
  this.form.reset();
}
 
 
 
}