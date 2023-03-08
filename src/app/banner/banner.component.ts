import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Persona } from '../model/persona';
import { PersonaService } from '../service/persona.service';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  persona: Persona [] = [];
  isLogged=false;


  constructor(public personaService: PersonaService, public router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona():void{
    this.personaService.lista().subscribe(data => 
      {this.persona = data;})}


  //ts para scroll del botón al footer
  scrollToElement(selector:any) {
    const element = document.querySelector(selector)
    element ? element.scrollIntoView({behavior: "smooth"}): null;

 
    
  }

}


