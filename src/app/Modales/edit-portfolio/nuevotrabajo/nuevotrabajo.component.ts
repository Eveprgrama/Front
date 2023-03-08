import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Trabajos } from 'src/app/model/trabajos';
import { TokenService } from 'src/app/service/token.service';
import { TrabajosService } from 'src/app/service/trabajos.service';

@Component({
  selector: 'app-nuevotrabajo',
  templateUrl: './nuevotrabajo.component.html',
  styleUrls: ['./nuevotrabajo.component.css']
})
export class NuevotrabajoComponent  implements OnInit {
  form: UntypedFormGroup;
  imagen:'';
  pagina:'';
  categoria:'';
  fecha:'';
  url:'';
  public formcontrol: UntypedFormControl;
  isLogged=false;

  constructor(public router: Router, private sTrabajos: TrabajosService, private FormBuilder: UntypedFormBuilder, private tokenService: TokenService) { 
    this.form= this.FormBuilder.group({
      imagen:[''],
      pagina:[''],
      categoria:[''],
      fecha:[''],
      url:['']
    })
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else {
      this.isLogged = false;
    }
  }
  submitData(): void{
    const trab = new Trabajos(this.imagen, this.pagina, this.categoria, this.fecha, this.url);
    this.sTrabajos.save(trab).subscribe(
      data=>{
        console.log("agregada")
      alert ("Habilidad añadida")
      window.location.reload();
    }, err =>{
      window.location.reload();
    })
    };
    
     limpiar():void{
      this.form.reset();
    }
}




