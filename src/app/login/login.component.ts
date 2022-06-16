import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: any;
  tokenStorage: any;
  roles: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if ( window.sessionStorage.getItem("auth-token") {
      this.isLoggedIn = true;
      this.role =  window.sessionStorage.getItem("auth-username");
    }

  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password)
    .subscribe(
      {
        next: (data: any) => {
          alert(data + " Data" + data.accessToken + " data.accesToken");
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.savedUser(data);

          alert(data + " Data");
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          alert(this.tokenStorage.getToken() + " Token");

          this.reloadPage();
        },
        error: (err: any) => {
          this.errorMessage = err.errors.message;
          this.isLoginFailed = true;
        }
      });

  }

  reloadPage(): void {
    window.location.reload();
  }

  }


