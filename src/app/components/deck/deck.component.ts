import { Component, Input, OnInit } from '@angular/core';
import { Card, Deck } from 'src/app/services/api.modules';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  @Input()
  deck: Deck = {};
  public cards: Card[] = [];

  constructor(
    private apiServices: ApiService

  ) { }

  ngOnInit(): void {
    this.deckDraw();
  }

  deckDraw(){
    this.apiServices
     .getDeckkDraw(this.deck.deck_id)
     .subscribe((draw) => this.cards = draw.Cards);
  }

}
