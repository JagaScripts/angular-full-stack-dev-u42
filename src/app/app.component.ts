import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rick-y-morty-frontend-app';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?:string;
  nueva: any = window.sessionStorage.getItem('auth-user');
  nueva2: any = window.sessionStorage.getItem('auth-token');

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(){
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(this.isLoggedIn){
      console.log(this.tokenStorageService.getUser() + " getUser");

      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;


      this.showAdminBoard = this.roles.includes('user');
      this.showAdminBoard = this.roles.includes('admin');
      this.showModeratorBoard = this.roles.includes('moderator');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
