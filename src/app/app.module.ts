import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RedesComponent } from './redes/redes.component';
import { LoginComponent } from './Modales/login/login.component';
import { BannerComponent } from './banner/banner.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ResumeComponent } from './resume/resume.component';
import { HardSkillsComponent } from './hard-skills/hard-skills.component';
import { SoftskillsComponent } from './softskills/softskills.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/Error.component';
import { IndexComponent } from './index/index.component';
import { EditBannerComponent } from './Modales/edit-banner/edit-banner.component';
import { EditSobremiComponent } from './Modales/edit-sobremi/edit-sobremi.component';
import { EditresumeComponent } from './Modales/editresume/editresume.component';
import { EditHardskillsComponent } from './Modales/edit-hardskills/edit-hardskills.component';
import { EditSoftComponent } from './Modales/edit-soft/edit-soft.component';
import { EditPortfolioComponent } from './Modales/edit-portfolio/edit-portfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { EditEstudiosComponent } from './Modales/edit-estudios/edit-estudios/edit-estudios.component';
import { AddexperienciaComponent } from './Modales/editresume-add/addexperiencia/addexperiencia.component';
import { RouterModule } from '@angular/router';
import { AddEstudiosComponent } from './Modales/add-estudios/add-estudios/add-estudios.component';
import { NewskillComponent } from './Modales/edit-hardskills/newskill/newskill.component';
import { NuevosoftComponent } from './Modales/edit-soft/nuevosoft/nuevosoft.component';
import { NuevotrabajoComponent } from './Modales/edit-portfolio/nuevotrabajo/nuevotrabajo.component';
import { interceptorProvider } from './service/interceptor.service';
import { RegistroComponent } from './Modales/registro/registro/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';






@NgModule({
  declarations: [				
    AppComponent,
    NavbarComponent,
    RedesComponent,
    LoginComponent,
    BannerComponent,
    SobremiComponent,
    ResumeComponent,
    HardSkillsComponent,
    SoftskillsComponent,
    TrabajosComponent,
    FooterComponent,
      ErrorComponent,
      IndexComponent,
      EditBannerComponent,
      EditSobremiComponent,
      EditresumeComponent,
      EditHardskillsComponent,
      EditSoftComponent,
      EditPortfolioComponent,
      EditEstudiosComponent,
      AddexperienciaComponent,
      AddEstudiosComponent,
      NewskillComponent,
      NuevosoftComponent,
      NuevotrabajoComponent,
      RegistroComponent,
      
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
