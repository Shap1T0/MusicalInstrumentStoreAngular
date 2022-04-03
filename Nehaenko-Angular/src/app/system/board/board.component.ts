import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductType } from 'src/app/shared/models/productType.model';
import { ProductService } from 'src/app/shared/servises/product.service';
import { ProductTypeService } from 'src/app/shared/servises/productType.service';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css'],
	changeDetection: ChangeDetectionStrategy.Default,
})
export class BoardComponent implements OnInit {
	products!: Product[] | undefined;

	constructor(
		private productService: ProductService,
		private productTypeService: ProductTypeService
	) {
		this.productTypeService.selectedProductType$.subscribe(
			(productType) => {
				if (productType) {
					this.filterBoard(productType);
				}
				else {
					this.noFilter();
				}
			}
		);
	}

	ngOnInit(): void {
		var type = this.productTypeService.getCurrentProductType();
		if (type) {
			this.filterBoard(type);
		} else {
			this.noFilter();
		}
	}

	filterBoard(productType: ProductType) {
		this.productService
			.getProductsByProductType(productType.id)
			.subscribe((products: Product[]) => {
				this.products = products;
			});
	}

	noFilter() {
		this.productService.getProducts().subscribe((products: Product[]) => {
			this.products = products;
		});
	}
}
