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
    DeleteCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
