import { Component, Input, OnInit } from '@angular/core';
import {FoodService} from '../../services/foodService' ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() homeListFood: any[] = [] ;
  constructor(private foodService:FoodService) { 
    this.homeListFood = this.foodService.listFood ;
  }

  ngOnInit(): void {
    
  }

}
