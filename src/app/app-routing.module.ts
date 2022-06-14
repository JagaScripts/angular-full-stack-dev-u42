import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharacterComponent } from './character/character.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { ReadCharacterComponent } from './components/read-character/read-character.component';
import { UpdateCharacterComponent } from './components/update-character/update-character.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:"character", component: CharacterComponent },
  { path:"about", component: AboutComponent },
  { path:"home", component: HomeComponent },
  { path:"detalle/:id", component: DetalleComponent },
  { path:"crear", component: CreateCharacterComponent },
  { path:"leer", component: ReadCharacterComponent },
  { path:"actualizar", component: UpdateCharacterComponent },
  { path:"borrar", component: ReadCharacterComponent },
  { path:"add", component: CreateCharacterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
