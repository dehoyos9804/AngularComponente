import { Component, OnInit, ViewChild } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.css']
})
export class SerchComponent implements OnInit {
  
  @ViewChild(CardComponent) card: CardComponent;

  inputSearch: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getCard(event: any){
    this.card.getData(event.target.value);
  }
}
