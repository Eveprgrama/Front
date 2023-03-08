import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Hardskills } from 'src/app/model/hardskills';
import { HardskillsService } from 'src/app/service/hardskills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css']
})
export class NewskillComponent implements OnInit {
  form: UntypedFormGroup;
  titulo:'';
  progreso:'';
  public formcontrol: UntypedFormControl;
  isLogged=false;

  constructor(public router: Router, private sHardskills: HardskillsService, private FormBuilder: UntypedFormBuilder, private tokenService: TokenService) { 
    this.form= this.FormBuilder.group({
      titulo:[''],
       progreso:[''],
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
    const skills = new Hardskills(this.titulo, this.progreso);
    this.sHardskills.save(skills).subscribe(
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
