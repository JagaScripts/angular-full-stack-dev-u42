import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

const AUTH_API = "https://jmm-spring-api-h2-angular.herokuapp.com/"
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any;
  private user$: Subject<any>; // Subject que emite información a componentes

  constructor(private httpClient: HttpClient) {
    this.user$ = new Subject();

  }

  login(username: string, password: string): Observable<any> {
    this.user = {username: username, password: password};
    this.user$.next(this.user);
    return this.httpClient.post(AUTH_API + "login", {
      username,
      password
    }, httpOptions)

  }

  register(username: string, password: string): Observable<any> {
    this.user = {username: username, password: password};
    this.user$.next(this.user);
    return this.httpClient.post(AUTH_API + "users/", {
      username,
      password
    }, httpOptions);
  }

  getByName(name: string | null): Observable<any> {
    return this.httpClient.get(`${AUTH_API}/users/${name}`);
  }
  getUser$(): Observable<any>{
    return this.user$.asObservable();
  }

}


