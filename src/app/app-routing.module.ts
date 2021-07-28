import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";

import { OutsComponent } from "./views/outs/outs.component"
import { LoginComponent } from './views/login/login.component';
import { EntradaComponent } from './views/entrada/entrada.component';
import { GraficoComponent } from './views/grafico/grafico.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent

}, 
{
  path: "inputs",
  component: EntradaComponent
},
{
  path: "outs",
  component: OutsComponent
},
{
  path: "login",
  component: LoginComponent
},
{
  path: "grafico",
  component: GraficoComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
