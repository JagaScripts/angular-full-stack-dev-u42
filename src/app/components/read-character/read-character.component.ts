import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-character',
  templateUrl: './read-character.component.html',
  styleUrls: ['./read-character.component.css']
})
export class ReadCharacterComponent implements OnInit {

  @Input() characters: any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
