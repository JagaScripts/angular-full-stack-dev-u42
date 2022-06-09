import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharacterComponent } from './character/character.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"character",
    component:CharacterComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"detalle",
    component:DetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
