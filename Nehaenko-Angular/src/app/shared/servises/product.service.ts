import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable()
export class ProductService{
	selectedProduct!: Product;

	constructor(
		private http: HttpClient
	){}

	getProductsByProductType(productType: string): Observable<Product[]>{
		return this.http.get<Product[]>(`http://localhost:43516/api/Product/productType/${productType}`);
	}

	getProducts(): Observable<Product[]>{
		return this.http.get<Product[]>('http://localhost:43516/api/Product');
	}

}
