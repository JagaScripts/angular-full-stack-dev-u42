import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any;
  role: any;
  log!: string;

  constructor(private router:Router, private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {

    this.authService.getUser$().subscribe(user => {
      this.user = user;
    });

    this.userService.getUser$().subscribe(data => {
      this.role = data.role;
      console.log('navbar ---->' + data.role);
      this.log = 'Logout';
    });


  }

  logout(): void {
    window.sessionStorage.clear();
    this.user.username = '';
    this.role = '';
    this.log = 'Login';
    this.router.navigate(['/login']);
  }

}
