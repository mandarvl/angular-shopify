import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../services/sharedService' ;
import Food from '../../types/food' ;


@Component({
  selector: 'app-card-food',
  templateUrl: './card-food.component.html',
  styleUrls: ['./card-food.component.css']
})

export class CardFoodComponent implements OnInit {
  @Input() currentFood!:Food ;
  @Input() addToCart(id: number){
    if(this.sharedService.addToCart)
      this.sharedService.addToCart(id) ;
  }
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {

  }

}
