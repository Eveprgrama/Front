import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { Hardskills } from 'src/app/model/hardskills';
import { HardskillsService } from 'src/app/service/hardskills.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-edit-hardskills',
  templateUrl: './edit-hardskills.component.html',
  styleUrls: ['./edit-hardskills.component.css']
})
export class EditHardskillsComponent implements OnInit {
  hardskills: Hardskills = null;
  form: UntypedFormGroup;

  constructor(public router: Router, private activatedRouter: ActivatedRoute, private Hardskillservice: HardskillsService, private formBuilder: UntypedFormBuilder, private httpcliente: HttpClient) {
    this.form = this.formBuilder.group({
      titulo:[''],
      progreso:['']
    })
   }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Hardskillservice.detail(id).subscribe(
      data =>{
        this.hardskills = data;
      })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.Hardskillservice.update(id, this.hardskills).subscribe(
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
