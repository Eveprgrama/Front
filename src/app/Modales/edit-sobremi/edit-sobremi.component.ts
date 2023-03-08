import {  ChangeDetectionStrategy, Component, EventEmitter, 
  Input, OnInit, OnChanges, Output, SimpleChanges} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sobremi } from 'src/app/model/sobremi';
import { SobremiService } from 'src/app/service/sobremi.service';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-edit-sobremi',
  templateUrl: './edit-sobremi.component.html',
  styleUrls: ['./edit-sobremi.component.css']
})
export class EditSobremiComponent implements OnInit {
  smedit: Sobremi = null; 
  
  form: UntypedFormGroup;
 
  constructor(public router: Router, private ssobremi: SobremiService, private activatedRouter: ActivatedRoute, private formBuilder: UntypedFormBuilder, private httpclient: HttpClient) {
    this.form = this.formBuilder.group({
      imagen: [''],
      texto: [''],
     
  });
 
   }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.ssobremi.detail(id).subscribe(
      data=>{
        this.smedit = data;
      }
      )
  }
  get Imagen() {
    return this.form.get("imagen")
   }

   get Texto() {
    return this.form.get("texto")
   }

  onUpdate():void{
   const id = this.activatedRouter.snapshot.params['id'];
   this.ssobremi.update(id, this.smedit).subscribe(
    data=>{
      this.router.navigateByUrl('/index');
    }, err => {
      this.router.navigateByUrl('/index');
      console.log(err)
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


