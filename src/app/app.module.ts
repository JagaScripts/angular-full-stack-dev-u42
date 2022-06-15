import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CharacterComponent } from './character/character.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetalleComponent } from './detalle/detalle.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { ReadCharacterComponent } from './components/read-character/read-character.component';
import { UpdateCharacterComponent } from './components/update-character/update-character.component';
import { DeleteCharacterComponent } from './components/delete-character/delete-character.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeradorComponent } from './board-moderador/board-moderador.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CharacterComponent,
    DetalleComponent,
    CreateCharacterComponent,
    ReadCharacterComponent,
    UpdateCharacterComponent,
    DeleteCharacterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeradorComponent,
    BoardUserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
