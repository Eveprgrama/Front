import { Injectable } from '@angular/core';
//esto es para suscribirse y que reciba respuesta de forma asincronica
import { Observable } from 'rxjs';
//intercambiar informacion con el servidor web
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

 //metodo obserrvable que devuelve los datos
  obtenerDatos(): Observable<any> {
    return this.http.get('../../assets/json/portfolio.json')
  }
}
