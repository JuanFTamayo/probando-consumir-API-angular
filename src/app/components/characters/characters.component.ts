import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../interfaces/character';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {

  public characterList$!: Observable<Character>;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters(){
    this.characterList$ = this.charactersService.getCharacterList()
  }

}
