import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersServise } from './shared/servises/user.service';
import { AuthenticationService } from './shared/servises/authentication.service';
import { SystemModule } from './system/system.module';
import { ProductTypeService } from './shared/servises/productType.service';
import { ProductService } from './shared/servises/product.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AuthenticationModule,
		SystemModule
	],
	providers: [UsersServise, AuthenticationService, ProductTypeService, ProductService],
	bootstrap: [AppComponent]
})
export class AppModule { }
