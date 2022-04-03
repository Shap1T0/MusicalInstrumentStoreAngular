import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductType } from '../models/productType.model';

@Injectable()
export class ProductTypeService {
	private selectedProductType!: ProductType;
	selectedProductType$: EventEmitter<ProductType> = new EventEmitter();

	constructor(private http: HttpClient) {
		this.selectedProductType$.subscribe((productType)=> this.setCurrentProductType(productType))
	}

	getProductTypes(): Observable<[ProductType]> {
		return this.http.get<[ProductType]>(
			'http://localhost:43516/api/ProductType'
		);
	}

	setCurrentProductType(productType: ProductType){
		this.selectedProductType = productType;
	}

	getCurrentProductType(){
		return this.selectedProductType;
	}
}
