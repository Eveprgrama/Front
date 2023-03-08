import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajos } from 'src/app/model/trabajos';
import { TrabajosService } from 'src/app/service/trabajos.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})
export class EditPortfolioComponent implements OnInit {
trabajos: Trabajos = null;
form: UntypedFormGroup;

  constructor(public router: Router, private activatedRouter: ActivatedRoute, private Trabajosservice: TrabajosService, private formBuilder: UntypedFormBuilder, private httpcliente: HttpClient) { 
    this.form = this.formBuilder.group({
      imagen:[''],
      pagina:[''],
      categoria:[''],
      fecha:[''],
      url:[''],
    })
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Trabajosservice.detail(id).subscribe(
      data =>{
        this.trabajos = data;
      })
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.Trabajosservice.update(id, this.trabajos).subscribe(
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



