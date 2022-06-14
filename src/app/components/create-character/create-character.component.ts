import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  character: Character = {
    id: 0,
    name: "",
    status: "",
    species: "",
    gender: "",
    origin: "",
    location: "",
    image: "",
  };

  isCharacterAdded = false;

  constructor(private characterServicio: CharactersService) { }

  ngOnInit(): void {
  }

  // Add New
  addCharacter(): void {
    const data = {
      id: this.character.id,
      name: this.character.name,
      status: this.character.status,
      species: this.character.species,
      gender: this.character.gender,
      origin: this.character.origin,
      location: this.character.location,
      image: this.character.image,
    };
    if (!data.name) {
      alert('Please add name!');
      return;
    }

    this.characterServicio.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isCharacterAdded = true;
        },
        error => {
          console.log(error);
        });
  }

  // Reset on adding new
  newCharacter(): void {
    this.isCharacterAdded = false;
    this.character = {
      id: 0,
      name: "",
      status: "",
      species: "",
      gender: "",
      origin: "",
      location: "",
      image: "",
    };
  }


}
