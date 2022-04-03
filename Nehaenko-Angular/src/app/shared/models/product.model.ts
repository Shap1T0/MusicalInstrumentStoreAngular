import { ProductType } from "./productType.model";

export class Product{
	constructor(
		public name: string,
		public price: number,
		public amount: number,
		public description: string,
		public id: string,
		public type?: ProductType,
		public icon?: [any]
	){}
}
