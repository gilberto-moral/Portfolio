import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/views/home/home.component';
import { ContatosComponent } from './components/views/contatos/contatos.component';
import { WebsitesComponent } from './components/views/websites/websites.component';
import { CurriculumComponent } from './components/views/curriculum/curriculum.component';

const routes: Routes = [
  
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"contatos",
    component: ContatosComponent
  },
  {
    path:"websites",
    component: WebsitesComponent
  },
  {
    path:"curriculum",
    component: CurriculumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
