import { Component, OnInit } from '@angular/core';
import { Deck } from './services/api.modules';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
 public deck: Deck = {};
  
  constructor(
    private apiService:ApiService
  ){

  }

  ngOnInit(): void {
    this.newDeck();
  }

  onNewDeck( deck: Deck){
    this.deck = deck;
  }

  newDeck(){
    this.apiService
    .postDeck()
    .subscribe((deck) => this.deck = deck);
  }
}