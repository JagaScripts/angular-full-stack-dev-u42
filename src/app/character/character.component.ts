import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characterService : CharactersService;
  characters: any = null;

  constructor(private characterServicio: CharactersService) {

    this.characterService = characterServicio;

  }

  ngOnInit(): void {

   this.characters = this.characterServicio.getCharacters();


  }


}
