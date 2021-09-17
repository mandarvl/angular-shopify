import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/services/sharedService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() openCart = () => { console.log("Le drawer n'a pas été initialisé") ;} ;
  @Input() getCartItemCount = () => {
    if(this.sharedService.getCardItemCount)
      return this.sharedService.getCardItemCount() ;
    else
      return 0 ;
  } ;

  constructor(private sharedService:SharedService) {
  }

  ngOnInit(): void {
  }

}
