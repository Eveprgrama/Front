import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../model/estudios';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
url = 'https://porfoliobackend.onrender.com/estudios/';
  constructor(private httpCliente: HttpClient) { }

  public lista(): Observable<Estudios[]>{
    return this.httpCliente.get<Estudios[]>(this.url + 'lista');
  }

   public detail(id: number): Observable<Estudios>{
    return this.httpCliente.get<Estudios>(this.url + `detail/${id}`);
   }

   public save(estudio: Estudios): Observable<any>{
    return this.httpCliente.post<any>(this.url + 'nueva', estudio);
   }

   public update(id: number, estudio: Estudios): Observable<any>{
    return this.httpCliente.put<any>(this.url + `editar/${id}`, estudio)
   }

   public delete(id: number): Observable<any>{
    return this.httpCliente.delete<any>(this.url + `borrar/${id}`)
   }
}
