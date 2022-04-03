import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductTypeService } from 'src/app/shared/servises/productType.service';

@Component({
	selector: 'app-head',
	templateUrl: './head.component.html',
	styleUrls: ['./head.component.css'],
})
export class HeadComponent implements OnInit {
	constructor(private router: Router,
		private productTypeService: ProductTypeService) {}

	ngOnInit(): void {}

	onMainClick() {
		this.router.navigate(['/system/board']);
		this.productTypeService.selectedProductType$.emit(undefined);
	}
}
