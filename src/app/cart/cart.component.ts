import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
export class CartComponent {
  @Input() selectedFoods:ICartFood[] = [] ;
  constructor(private foodService:FoodService, private sharedService:SharedService, private snackBar: MatSnackBar) {
    this.sharedService.addToCart = this.addToCart.bind(this) ;
    this.sharedService.getCardItemCount = this.getCardItemCount.bind(this) ;
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, undefined, {
      duration: 3000,
      verticalPosition: "top"
    });
  }

  getCardItemCount(){
    return this.selectedFoods.length ;
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
      
      this.openSnackBar("Elément ajouté au panier!") ;
    }else{
      this.openSnackBar("Une erreur s'est produite, veuillez réessayer.") ;
    }
  }

  removeItem(index: number){
    this.selectedFoods.splice(index, 1) ;
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
