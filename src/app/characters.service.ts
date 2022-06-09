import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  characters: any = null;
  character: any = null;
  msgError: any = null;

  constructor(private http: HttpClient) {
      this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5")
        .subscribe( result => {
          this.characters = result;
        })

  }

  getCharacters(){

   return this.characters;

  }

  getCharacterId(id: number){

    for (const character of this.characters) {
      if (character.id === id) {

        return character;

      }
    }

  }

  getCharacter(){
    return this.character;
  }

  setCharacter(id: number){
    this.character = this.getCharacterId(id);
  }

}
