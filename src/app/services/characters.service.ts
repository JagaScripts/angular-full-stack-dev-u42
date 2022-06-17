import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Character } from '../models/character.model';



@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  apiUrl: string = 'http://localhost:3000/characters';
  apiUrlOnline: string = "https://rickandmortyapi.com/api/character/";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  characters: Character[] = [];
  character!: Character;
  msgError?: Error;

  constructor(private httpClient: HttpClient) { }


   // Show lists of item
   list(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Create new item
  getItem(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  create(data: Character): Observable<Character> {
    return this.httpClient.post<Character>(this.apiUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Edit/ Update
  update(id: number, data: Character): Observable<Character> {
    return this.httpClient.put<Character>(`${this.apiUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Delete
  delete(id?: number): Observable<Character> {
    return this.httpClient.delete<Character>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Search By Name
  filterByName(name: string): Observable<Character> {
    return this.httpClient.get<Character>(`${this.apiUrl}?name=${name}`).pipe(
      catchError(this.handleError)
    );
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };







  getItemOnline(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.apiUrlOnline}/${id}`).pipe(

      catchError(this.handleError)
    );
  }

}
