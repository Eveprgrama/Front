import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from '../model/email';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  private backendUrl = 'https://porfoliobackend.onrender.com/contacto/email';

  constructor(private http: HttpClient) { }

  sendContactForm(email: Email): Observable<any> {
    return this.http.post<any>(this.backendUrl, email);
  }

}