import { Component } from '@angular/core';
import { ItemListInterface} from './../entities/item-list-interface';
import { CartService } from './../services/cart.service';  

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent {
	itemsInCart: ItemListInterface[]; 
	sum: number;
	
	constructor(private cartService: CartService){} 

	ngOnInit() {
		this.itemsInCart = this.cartService.getChooseItems();
		this.sum = this.cartService.getSum();
	}

	deleteFromCart(item){
		this.cartService.deleteFromCart(item);
		this.sum = this.cartService.getSum();
		this.itemsInCart = this.cartService.getChooseItems();
	}

}
