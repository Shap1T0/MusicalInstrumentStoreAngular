import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { BasketService } from 'src/app/shared/servises/basket.service';
import { ProductService } from 'src/app/shared/servises/product.service';

@Component({
	selector: 'app-product-page',
	templateUrl: './product-page.component.html',
	styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
	inBusketCount: number = 0;
	product!: Product;

	constructor(private productServise: ProductService,
		private basketService: BasketService) {}

	ngOnInit(): void {
		this.product = this.productServise.selectedProduct;
		this.inBusketCount = this.basketService.findItem(this.product);
		this.product.amount - this.inBusketCount;
	}
	addBasket(product: Product) {
		if(product.amount > this.inBusketCount){
			this.basketService.addProduct(product);
			this.inBusketCount ++;
		}
	}

	removeBasket(product: Product) {
		if(product.amount !== 0){
			this.basketService.removeProduct(product);
			this.inBusketCount --;
		}
	}
}
