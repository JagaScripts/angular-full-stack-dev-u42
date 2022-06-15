import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard()
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
