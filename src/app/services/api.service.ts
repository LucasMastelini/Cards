import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deck, Draw } from './api.modules';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDeckkDraw(deckid: string = 'new', numberOfCards: number = 5): Observable<Draw> {
    return this.httpClient.get<Draw>(`${environment.apiUrl}/deck/${deckid}/draw/?count=${numberOfCards}`);
  }

  postDeck(){
    return this.httpClient.post<Deck>(`${environment.apiUrl}/deck/new?jokers_enable=true`, {});
  }
}
