import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { BasketService } from 'src/app/shared/servises/basket.service';
import { ProductService } from 'src/app/shared/servises/product.service';

@Component({
	selector: 'app-product-item',
	templateUrl: './product-item.component.html',
	styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
	inBusketCount: number = 0;
	@Input() product!: Product;
	constructor( private basketService: BasketService,
		private producServise: ProductService,
		private router: Router) {}

	ngOnInit(): void {
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

	onProductCardClick(product: Product){
		this.router.navigate(['/system/productpage'])
		this.producServise.selectedProduct = product;

	}
}
