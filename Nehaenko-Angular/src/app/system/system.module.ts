import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { MenuComponent } from './menu/menu.component';
import { BoardComponent } from './board/board.component';
import { HeadComponent } from './head/head.component';
import { BasketComponent } from './head/basket/basket.component';
import { ProductItemComponent } from './board/product-item/product-item.component';
import { BasketItemComponent } from './head/basket/basket-item/basket-item.component';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
	declarations: [
		SystemComponent,
		MenuComponent,
		BoardComponent,
		HeadComponent,
		BasketComponent,
		ProductItemComponent,
		BasketItemComponent,
		ProductPageComponent,
	],
	imports: [CommonModule, SystemRoutingModule],
	providers: [],
})
export class SystemModule {}
