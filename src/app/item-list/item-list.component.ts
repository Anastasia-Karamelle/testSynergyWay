import { Component } from '@angular/core';
import { ItemListInterface} from './../entities/item-list-interface';
import { CartService } from './../services/cart.service'; 
import  itemList  from './../entities/itemList';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [CartService]
})
export class ItemListComponent {
	public items: ItemListInterface[] = itemList;

	constructor(private cartService: CartService){} 

	addToCart(item: ItemListInterface){
		this.cartService.addItemToCart(item);
	}
}
