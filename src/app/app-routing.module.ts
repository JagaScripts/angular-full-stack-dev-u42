import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeradorComponent } from './board-moderador/board-moderador.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { CharacterComponent } from './character/character.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { ReadCharacterComponent } from './components/read-character/read-character.component';
import { UpdateCharacterComponent } from './components/update-character/update-character.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AdminGuardService } from './services/admin-guard.service';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:"characters", component: CharacterComponent, canActivate: [AuthGuardService] },
  { path:"about", component: AboutComponent },
  { path:"home", component: HomeComponent },
  { path:"detalle/:id", component: DetalleComponent, canActivate: [AuthGuardService] },
  { path:"crear", component: CreateCharacterComponent },
  { path:"leer", component: ReadCharacterComponent },
  { path:"actualizar", component: UpdateCharacterComponent },
  { path:"borrar", component: ReadCharacterComponent },
  { path:"login", component: LoginComponent },
  { path:"mod", component: BoardModeradorComponent },
  { path:"admin", component: BoardAdminComponent, canActivate:[AdminGuardService] },
  { path:"user", component: BoardUserComponent, canActivate: [AuthGuardService] },
  { path:"register", component: RegisterComponent },
  { path:"profile", component: ProfileComponent, canActivate: [AuthGuardService, AdminGuardService] },
  { path:"add", component: CreateCharacterComponent, canActivate:[AdminGuardService] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
