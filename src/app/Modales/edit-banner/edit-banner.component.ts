import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { FormsModule } from '@angular/forms';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {
 persona: Persona = null;
 form: UntypedFormGroup;
 


  constructor(public router: Router, private activatedRouter: ActivatedRoute, private Personaservice: PersonaService, private formBuilder: UntypedFormBuilder, private httpCliente: HttpClient) {
    this.form = this.formBuilder.group({
      img:[''],
      nombre:[''],
      apellido:[''],
      titulo:[''],
    })

   }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Personaservice.detail(id).subscribe(
      data =>{
        this.persona = data;
      })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.Personaservice.update(id, this.persona).subscribe(
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

