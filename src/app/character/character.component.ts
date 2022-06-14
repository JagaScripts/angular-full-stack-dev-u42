import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { CharactersService } from '../services/characters.service';

const TOTAL_CHARACTERS: number = 826;
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {


  characters: Character[] = [];
  character!: Character;

  constructor(private characterServicio: CharactersService) {



  }

  ngOnInit(): void {

    this.characterServicio.list()
      .subscribe(response => {

        this.characters = response;

        if (this.characters.length === 0) {

          this.generateDbRamdom();

        }

      },
        error => {
          console.log(error);
        });


  }


  generateDbRamdom() {





    for (let index = 0; index < 5; index++) {
      this.characterServicio.getItemOnline(this.getRandom(1, TOTAL_CHARACTERS))
      .subscribe(response => {
        let auxCharacter: Character = {
        id: response.id,
        name: response.name,
        status: response.status,
        species: response.species,
        gender: response.gender,
        origin: response.origin,
        location: response.location,
        image :response.image};
        this.characterServicio.create(auxCharacter).subscribe(response => {
          console.log(response);
        },
          error => {
            console.log(error);
          });
      }, error => {
        console.log(error);
      });


  }

  }

  getRandom(min: number, max: number) {
    max++;
    return Math.floor(Math.random() * (max - min) + min);

  }
}
