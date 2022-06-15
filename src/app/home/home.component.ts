import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any = null;

  constructor(private router:Router, private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {

    const username = window.sessionStorage.getItem("auth-username");
    console.log(username);

    this.authService.getByName(username)
      .subscribe(
        result => {
          this.user = result;
          window.sessionStorage.setItem("auth-id",result.id);
          window.sessionStorage.setItem("auth-role",result.role);
          this.userService.addUser(result);
        });
  }

}
