import { Injectable } from '@angular/core';
import { ItemListInterface } from './../entities/item-list-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService { 

	constructor() { }

	addItemToCart(item){
		const chooseItem = JSON.parse(localStorage.getItem('cart')) as ItemListInterface[];
		chooseItem.push(item); 
		localStorage.setItem('cart', JSON.stringify(chooseItem)); 
	}

	deleteFromCart(item){
		const chooseItem = JSON.parse(localStorage.getItem('cart')) as ItemListInterface[];
		const deleteIndex = chooseItem.findIndex( el => {
			return el.id === item.id;
		});  
		chooseItem.splice(deleteIndex, 1);
		localStorage.setItem('cart', JSON.stringify(chooseItem)); 
	}

	getChooseItems():ItemListInterface[]{
		const chooseItem = JSON.parse(localStorage.getItem('cart')) as ItemListInterface[];
		if(localStorage.getItem('cart'))
			return JSON.parse(localStorage.getItem('cart')) as ItemListInterface[];
		return [];
	}
	
	getSum(){
		const chooseItem = JSON.parse(localStorage.getItem('cart')) as ItemListInterface[];
		return chooseItem
			.map(el => el.price)
			.reduce((previousValue, currentValue) => {
				console.log(previousValue, currentValue)
  				return previousValue + currentValue;
			}, 0);  
	}
}
