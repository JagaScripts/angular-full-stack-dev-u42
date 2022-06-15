import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-board-moderador',
  templateUrl: './board-moderador.component.html',
  styleUrls: ['./board-moderador.component.css']
})
export class BoardModeradorComponent implements OnInit {
  content?: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getModeratorBoard()
    .subscribe( {
      next: (response: any) => {
        this.content = response;

      },
      error: (error: any) => {
        this.content = JSON.parse(error.error).message;
      }
    });
  }

}
