import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
	providedIn: 'root',
})
export class BasketService {
	items!: Product[];

	public contentСhanged$: EventEmitter<Product> = new EventEmitter();

	constructor() {}

	addProduct(product: Product) {
		if (this.items) {
			this.items.push(product);
		} else {
			this.items = [product];
		}
		this.contentСhanged$.emit();
	}

	removeProduct(product: Product) {
		if (this.items) {
			var first = true;
			this.items.forEach((element, index) => {
				if(element.id === product.id && first){
					this.items.splice(index, 1);
					first=false;
				}
			});
		}
		this.contentСhanged$.emit();
	}

	clear() {}

	getItems() {}

	findItem(product: Product): number{
		var count = 0;
		if (this.items) {
			this.items.forEach(element => {
				if(element.id == product.id){
					count ++;
				}
			});
		}
		return count;
	}
}
