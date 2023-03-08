import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { EditBannerComponent } from './Modales/edit-banner/edit-banner.component';
import { EditEstudiosComponent } from './Modales/edit-estudios/edit-estudios/edit-estudios.component';
import { EditHardskillsComponent } from './Modales/edit-hardskills/edit-hardskills.component';
import { EditPortfolioComponent } from './Modales/edit-portfolio/edit-portfolio.component';
import { EditSobremiComponent } from './Modales/edit-sobremi/edit-sobremi.component';
import { EditSoftComponent } from './Modales/edit-soft/edit-soft.component';
import { EditresumeComponent } from './Modales/editresume/editresume.component';
import { LoginComponent } from './Modales/login/login.component';
import { RegistroComponent } from './Modales/registro/registro/registro.component';
import { GuardsService as guard } from './service/guards.service';

const routes: Routes = [
  {path:"index", component:IndexComponent},
  {path:"login", component:LoginComponent},
  {path:"editexp/:id", component:EditresumeComponent, canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: "editsobremi/:id", component:EditSobremiComponent, canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: "editestu/:id", component:EditEstudiosComponent, canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: "editbanner/:id", component: EditBannerComponent, canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: "edithardskills/:id", component: EditHardskillsComponent, canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: "editsoftskills/:id", component: EditSoftComponent, canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: "edittrabajos/:id", component: EditPortfolioComponent, canActivate: [guard], data: { expectedRol: ['admin']}},
  {path:"", redirectTo: "/index", pathMatch:"full"},
  {path: 'registro', component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
