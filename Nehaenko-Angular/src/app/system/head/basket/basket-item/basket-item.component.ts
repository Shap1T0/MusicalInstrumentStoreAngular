import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
	selector: 'app-basket-item',
	templateUrl: './basket-item.component.html',
	styleUrls: ['./basket-item.component.css'],
})
export class BasketItemComponent implements OnInit {
	@Input() product!: Product;
	constructor() {}

	ngOnInit(): void {}
}
