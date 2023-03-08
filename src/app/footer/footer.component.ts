import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormService } from '../service/contact-form.service';
import { Email } from '../model/email';




@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  mail :Email 
 

  constructor(private formBuilder: FormBuilder, private contactFormService: ContactFormService) { }

  ngOnInit(): void {
  }

  public enviarEmail() {
    this.contactFormService.sendContactForm(this.mail)
      .subscribe(data => console.log(data));
      window.location.reload()
  }

  public onSubmit() {
    this.enviarEmail();
  }
  }   

