import { Component, Input, OnInit } from '@angular/core';
import Food from 'src/types/food';
import {FoodService} from '../../services/foodService' ;
import {SharedService} from '../../services/sharedService' ;

interface ICartFood extends Food{
  quantite: number
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() selectedFoods:ICartFood[] = [] ;
  constructor(private foodService:FoodService, private sharedService:SharedService) {
    this.sharedService.addToCart = this.addToCart.bind(this) ;
  }

  ngOnInit(): void {
  }

  addToCart(id: number){
    let selected = this.foodService.getFoodById(id) ;
    if(selected != undefined && selected != null){
      let selectedIndex = this.selectedFoods.findIndex(x => x.id == selected?.id) ;
      if(selectedIndex == -1){
        this.selectedFoods.unshift({...selected, quantite: 1}) ;
      }else{
        console.log("Efa misy") ;
        this.increaseQuantity(selectedIndex) ;
      }
      
      alert("Elément ajouté au panier!") ;
    }
  }

  removeItem(index: number){
    console.log(index) ;
    this.selectedFoods.splice(index, 1) ;
    console.log(this.selectedFoods) ;
  }

  increaseQuantity(index: number){
    let current = this.selectedFoods[index] ;
    if(current !== undefined){
      current.quantite++ ;
    }
  }

  decreaseQuantity(index: number){
    let current = this.selectedFoods[index] ;
    if(current !== undefined && current.quantite > 1)
      current.quantite-- ;
  }

}
