import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hardskills } from '../model/hardskills';

@Injectable({
  providedIn: 'root'
})
export class HardskillsService {
  url = 'https://porfoliobackend.onrender.com/porcentaje/';

  constructor(private httpCliente: HttpClient) { }

  public lista(): Observable<Hardskills[]>{
    return this.httpCliente.get<Hardskills[]>(this.url + 'lista');
  }

   public detail(id: number): Observable<Hardskills>{
    return this.httpCliente.get<Hardskills>(this.url + `detail/${id}`);
   }

   public save(hardskills: Hardskills): Observable<any>{
    return this.httpCliente.post<any>(this.url + 'nueva', hardskills);
   }

   public update(id: number, hardskills: Hardskills): Observable<any>{
    return this.httpCliente.put<any>(this.url + `editar/${id}`, hardskills)
   }

   public delete(id: number): Observable<any>{
    return this.httpCliente.delete<any>(this.url + `borrar/${id}`)
   }
}

