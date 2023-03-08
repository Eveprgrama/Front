import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-edit-estudios',
  templateUrl: './edit-estudios.component.html',
  styleUrls: ['./edit-estudios.component.css']
})
export class EditEstudiosComponent implements OnInit {
estudio: Estudios = null;
form: UntypedFormGroup;

  constructor(public router: Router, private sEstudios: EstudiosService, private activatedrouter: ActivatedRoute, private formbuilder: UntypedFormBuilder, private http: HttpClient) {
    this.form= this.formbuilder.group({
      instituto:[''],
      inicio:[''],
      fin:[''],
      descripcion:[''],
      img:[''],
      especializacion:[''],
   })
   }

  ngOnInit(): void {
    const id = this.activatedrouter.snapshot.params['id'];
    this.sEstudios.detail(id).subscribe(
      data =>{
        this.estudio = data;
      }
    )
  }
  get Instituto() {
    return this.form.get("instituto")
   }
 
   get Descripcion(){
    return this.form.get("descripcion")
   }
   
   get Inicio(){
    return this.form.get("inicio")
   }
 
   get Fin(){
    return this.form.get("fin")
   }
 
   get Especializacion(){
    return this.form.get("especializacion")
   }
  
   get Img(){
    return this.form.get("img")
  }
  onUpdate(): void{
    const id = this.activatedrouter.snapshot.params['id'];
    this.sEstudios.update(id, this.estudio).subscribe(
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
