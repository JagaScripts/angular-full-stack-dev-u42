import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  character: any = null;

  constructor(private characterServicio: CharactersService) { }

  ngOnInit(): void {

    this.character = this.characterServicio.getCharacter();

  }

}
