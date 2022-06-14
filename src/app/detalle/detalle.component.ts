import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../models/character.model';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  character!: Character;

  constructor(private characterServicio: CharactersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.getCharacter(this.route.snapshot.paramMap.get('id'));

  }

  getCharacter(id: string | null): void {
    let nId = id;
    console.log(nId + " Numero " + id +  " Cadena ")
    this.characterServicio.getItem(Number(nId))
      .subscribe(
        (response: Character) => {
          this.character = response;
        },
        (error: any) => {
          console.log(error);
        });
  }

}
