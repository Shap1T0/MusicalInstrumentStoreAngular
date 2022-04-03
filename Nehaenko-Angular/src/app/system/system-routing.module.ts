import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SystemComponent } from './system.component';

const routes: Routes = [
	{
		path: 'system',
		component: SystemComponent,
		children: [
			{ path: 'productpage', component: ProductPageComponent },
			{ path: 'board', component: BoardComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class SystemRoutingModule {}
