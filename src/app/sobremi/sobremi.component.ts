import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sobremi } from '../model/sobremi';
import { SobremiService } from '../service/sobremi.service';
import { TokenService } from '../service/token.service';



@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  sobremi:Sobremi[] = [];
  isLogged=false;

  constructor(private sobremiservice:SobremiService, public router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
   this.cargarSobremi();
   if(this.tokenService.getToken()){
    this.isLogged= true;
  } else {
    this.isLogged = false;
  }
  }

  cargarSobremi():void{
    this.sobremiservice.lista().subscribe(data => 
      {this.sobremi = data;})}

}