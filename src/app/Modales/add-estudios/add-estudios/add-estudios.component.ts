import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-add-estudios',
  templateUrl: './add-estudios.component.html',
  styleUrls: ['./add-estudios.component.css']
})
export class AddEstudiosComponent implements OnInit {
form: FormGroup;
estudios: Estudios ={
img:'',
instituto: '',
inicio: '',
fin: '',
especializacion: '',
descripcion: '',
}
submitted = false;
isLogged=false;
public FormControl: FormControl;

  constructor(public router: Router, private sEstudios: EstudiosService, private FormBuilder: FormBuilder, private tokenService: TokenService) {
    this.form= this.FormBuilder.group({
      img: [''],
      instituto:[''],
     descripcion : [''],
      inicio : [''],
      fin : [''],
      especializacion : [''],
    })
   }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else {
      this.isLogged = false;
    }
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

   saveEstudio(): void {
    const data = {
      img: this.estudios.img,
      instituto: this.estudios.instituto,
      descripcion: this.estudios.descripcion,
      inicio: this.estudios.inicio,
      fin: this.estudios.fin,
      especializacion: this.estudios.especializacion
    };
    this.sEstudios.save(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        window.location.reload();
      }, error: (e) => 
      window.location.reload()

    });
   }

    
     limpiar():void{
      this.form.reset();
    }
     

}