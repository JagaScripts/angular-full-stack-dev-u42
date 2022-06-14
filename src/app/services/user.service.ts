import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const API_URL = "https://jmm-spring-api-h2-angular.herokuapp.com/users/";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.httpClient.get(API_URL + 'all', { responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.httpClient.get(API_URL + 'user', { responseType: 'text'});
  }

  getModeratorBoard(): Observable<any> {
    return this.httpClient.get(API_URL + 'mod', { responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.httpClient.get(API_URL + 'admin', { responseType: 'text'});
  }
}
