import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trabajos } from '../model/trabajos';

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {
  url = 'https://porfoliobackend.onrender.com/trabajos/';

  constructor(private httpCliente: HttpClient) { }
  public lista(): Observable<Trabajos[]>{
    return this.httpCliente.get<Trabajos[]>(this.url + 'lista');
  }

   public detail(id: number): Observable<Trabajos>{
    return this.httpCliente.get<Trabajos>(this.url + `detail/${id}`);
   }

   public save(trabajos: Trabajos): Observable<any>{
    return this.httpCliente.post<any>(this.url + 'nueva', trabajos);
   }

   public update(id: number, trabajos: Trabajos): Observable<any>{
    return this.httpCliente.put<any>(this.url + `editar/${id}`, trabajos)
   }

   public delete(id: number): Observable<any>{
    return this.httpCliente.delete<any>(this.url + `borrar/${id}`)
   }
}
