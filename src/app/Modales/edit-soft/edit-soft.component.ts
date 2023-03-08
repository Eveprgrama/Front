import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { Softskills } from 'src/app/model/softskills';
import { SoftskillsService } from 'src/app/service/softskills.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-edit-soft',
  templateUrl: './edit-soft.component.html',
  styleUrls: ['./edit-soft.component.css']
})
export class EditSoftComponent implements OnInit {
  softskills: Softskills = null;
  form: UntypedFormGroup;
  

  constructor(public router: Router, private activatedRouter: ActivatedRoute, private Softskillservice: SoftskillsService, private formBuilder: UntypedFormBuilder, private httpcliente: HttpClient) {
    this.form = this.formBuilder.group({
      habilidad:[''],
      imagen:[''],
      descripcion:['']
    })
   }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Softskillservice.detail(id).subscribe(
      data =>{
        this.softskills = data;
      })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.Softskillservice.update(id, this.softskills).subscribe(
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
