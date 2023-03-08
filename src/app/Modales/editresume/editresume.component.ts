import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-editresume',
  templateUrl: './editresume.component.html',
  styleUrls: ['./editresume.component.css']
})
export class EditresumeComponent implements OnInit {
expLab : Experiencia = null;
form: UntypedFormGroup;
  constructor(public router: Router, private sExperiencia: ExperienciaService, private activatedrouter: ActivatedRoute, private formBuilder: UntypedFormBuilder, private http: HttpClient) {
    this.form= this.formBuilder.group({
      nombreE:[''],
      inicio:[''],
      fin:[''],
      descripcionE:[''],
      img:[''],
      localidad:[''],
   })
  }

  ngOnInit(): void {
   const id = this.activatedrouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }
    )
  }
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

onUpdate(): void{
  const id = this.activatedrouter.snapshot.params['id'];
  this.sExperiencia.update(id, this.expLab).subscribe(
    data=>{
      this.router.navigateByUrl('/index');
    }, err =>{
      this.router.navigateByUrl('/index');
    }
  )
}
  
onEnviar(event: Event){
  event.preventDefault; 
 if (this.form.valid){
    alert("Todo salio bien ¡Enviar formuario!")
  }else{    
    this.form.markAllAsTouched(); 
  }

}

volver(event:Event){
  this.router.navigateByUrl('/index');
}



}

