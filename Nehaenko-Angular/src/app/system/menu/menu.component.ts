import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductType } from 'src/app/shared/models/productType.model';
import { ProductTypeService } from 'src/app/shared/servises/productType.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
	productTypes!: ProductType[];

	constructor(
		private productTypeService: ProductTypeService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.productTypeService
			.getProductTypes()
			.subscribe((types: ProductType[]) => {
				this.productTypes = types;
				console.log(this.productTypes);
			});
	}

	onTypeClick(productType: ProductType) {
		this.router.navigate(['/system/board']);
		this.productTypeService.selectedProductType$.emit(productType);
		this.productTypes.forEach((element) => {
			element.isActive = false;
		});
		productType.isActive = true;
	}

	onMainClick() {
		this.router.navigate(['/system/board']);
		this.productTypes.forEach((element) => {
			element.isActive = false;
		});
		this.productTypeService.selectedProductType$.emit(undefined);
	}
}
