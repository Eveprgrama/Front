import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sobremi } from '../model/sobremi';

@Injectable({
  providedIn: 'root'
})
export class SobremiService {
  url = 'https://porfoliobackend.onrender.com/sobremi/';
  constructor(private http: HttpClient) { }

//muestra sobremi
  public getSobreMi(): Observable<Sobremi> {
    return this.http.get<Sobremi>(this.url + 'mostrar');
  }
  //trae la lista -- no es necesario ya que solo tengo persona propia
  public lista(): Observable<Sobremi[]> {
    return this.http.get<Sobremi[]>(this.url + 'lista');
  }

  public detail(id:number):Observable<Sobremi>{
    return this.http.get<Sobremi>(this.url + `detail/${id}`);
  }

  //se la edita por id
  public update(id:number, sobremi:Sobremi): Observable<any>{
    return this.http.put<any>(this.url + `editar/${id}`, sobremi);
  }
  //se borra
  public delate(id:number): Observable<any>{
    return this.http.delete<any>(this.url + `borrar/${id}`)
  }
}
