import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
url = 'https://porfoliobackend.onrender.com/personas/';

  constructor(private http: HttpClient) { }
//muestra a la persona
  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.url + 'perfil');
  }
  //trae la lista -- no es necesario ya que solo tengo persona propia
  public lista(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url + 'traer');
  }

  public detail(id:number):Observable<Persona>{
    return this.http.get<Persona>(this.url + `detail/${id}`);
  }

  //se la edita por id
  public update(id:number, Persona:Persona): Observable<any>{
    return this.http.put<any>(this.url + `editar/${id}`, Persona);
  }
  //se borra
  public delate(id:number): Observable<any>{
    return this.http.delete<any>(this.url + `borrar/${id}`)
  }
//se crea una nueva -- no quiero mas de una persona asi que comento
 /* public save(Persona: Persona): Observable<any>{
    return this.http.post<any>(this.url + 'nueva', Persona);
  }*/

}
