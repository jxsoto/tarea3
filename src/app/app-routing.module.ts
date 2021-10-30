import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ServCliComponent} from './serv-cli/serv-cli.component';
import {DetallesComponent} from './detalles/detalles.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"servicli", component:ServCliComponent},
  {path:"detalleNoticia/:id", component:DetallesComponent},
  {path:"detalleNoticia", component:DetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
