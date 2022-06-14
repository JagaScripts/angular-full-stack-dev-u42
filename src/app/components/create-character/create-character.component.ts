import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/characters.service';

const TOTAL_CHARACTERS: number = 826;
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

  isSharacterFind = false;

  constructor(private characterServicio: CharactersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  // Add New
  addCharacter(): void {

    if ((this.character.id < 1 || this.character.id > TOTAL_CHARACTERS)) {



      alert('Porfavor introduce una id entre 1 y 826!');
      this.router.navigate(['/crear']);

      return;

    } else {

      this.characterServicio.getItemOnline(this.character.id)
        .subscribe(
          {
            next: (response: Character) => {
              this.character = response;
              this.isSharacterFind = true;
            },
            error: (error: Error) => {
              console.log(error.message);
            }
          });



    }



    if (this.isSharacterFind) {
      this.characterServicio.create(this.character)
      .subscribe(
        {
          next: (response: Character) => {
            alert(`Character created!`);
          },
          error: (error: Error) => {
            console.log(error.message);
          }
        });
    }

    this.newCharacter();
  }

  // Reset on adding new
  newCharacter(): void {
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
    this.isSharacterFind = false;
  }


}
