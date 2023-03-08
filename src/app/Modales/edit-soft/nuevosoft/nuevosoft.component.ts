import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Softskills } from 'src/app/model/softskills';
import { SoftskillsService } from 'src/app/service/softskills.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-nuevosoft',
  templateUrl: './nuevosoft.component.html',
  styleUrls: ['./nuevosoft.component.css']
})
export class NuevosoftComponent implements OnInit {
  form: UntypedFormGroup;
  habilidad:'';
  imagen:'';
  descripcion:'';
  public formcontrol: UntypedFormControl;
  isLogged=false;

  constructor(public router: Router, private sSoftkills: SoftskillsService, private FormBuilder: UntypedFormBuilder, private tokenService: TokenService) { 
    this.form= this.FormBuilder.group({
      habilidad:[''],
       imagen:[''],
       descripcion:['']
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
    const soft = new Softskills(this.habilidad, this.imagen, this.descripcion);
    this.sSoftkills.save(soft).subscribe(
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



