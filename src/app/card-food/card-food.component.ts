import { Component, OnInit, Input } from '@angular/core';

interface Food{
  nom: string,
  categorie: string,
  lienImage: string,
  description: string
}

@Component({
  selector: 'app-card-food',
  templateUrl: './card-food.component.html',
  styleUrls: ['./card-food.component.css']
})

export class CardFoodComponent implements OnInit {
  @Input() currentFood!:Food ;
  constructor() { }

  ngOnInit(): void {
  }

}
