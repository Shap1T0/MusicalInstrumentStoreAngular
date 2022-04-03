import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { BasketService } from 'src/app/shared/servises/basket.service';

@Component({
	selector: 'app-basket',
	templateUrl: './basket.component.html',
	styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
	products: Product[] = [];
	constructor(private basketServise: BasketService) {
		basketServise.contentСhanged$.subscribe(() => this.contentСhange());
	}

	ngOnInit(): void {
	}

	contentСhange() {
		this.products = this.basketServise.items;
	}
}
