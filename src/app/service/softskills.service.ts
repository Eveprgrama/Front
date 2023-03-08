import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Softskills } from '../model/softskills';

@Injectable({
  providedIn: 'root'
})
export class SoftskillsService {
  url = 'https://porfoliobackend.onrender.com/softskills/';

  constructor(private httpCliente: HttpClient) { }

  public lista(): Observable<Softskills[]>{
    return this.httpCliente.get<Softskills[]>(this.url + 'traer');
  }

   public detail(id: number): Observable<Softskills>{
    return this.httpCliente.get<Softskills>(this.url + `detail/${id}`);
   }

   public save(softskills: Softskills): Observable<any>{
    return this.httpCliente.post<any>(this.url + 'nueva', softskills);
   }

   public update(id: number, softskills: Softskills): Observable<any>{
    return this.httpCliente.put<any>(this.url + `editar/${id}`, softskills)
   }

   public delete(id: number): Observable<any>{
    return this.httpCliente.delete<any>(this.url + `borrar/${id}`)
   }
}
