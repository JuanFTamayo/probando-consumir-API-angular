import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

API_URL= 'https://rickandmortyapi.com/api/character'

  constructor(private http: HttpClient) { }

  getCharacterList():Observable<Character>{
    return this.http.get<Character>(this.API_URL).pipe(res=>res)
  }

}
