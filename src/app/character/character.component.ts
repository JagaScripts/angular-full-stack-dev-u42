import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5").subscribe(
      result => {
      this.character = result;
    },
    error => {
      console.log('No hay');
    })
  }

}
