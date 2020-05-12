import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  users : Array<String> = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }
  
  getData(cantidad : number){
    for(let i = 0; i< cantidad; i++){
      this.api.getAllUser().subscribe((data)=>{
        this.users[i] = data['results'];
      },
      (err)=>{
        console.error(err);
      });
    }

    this.users = [];
  }

}
