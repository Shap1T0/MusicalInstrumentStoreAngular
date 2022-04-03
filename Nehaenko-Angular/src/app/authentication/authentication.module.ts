import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component'
import { AuthenticatonComponent } from "./authentication.component";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
	declarations: [
		LoginComponent,
		RegistrationComponent,
		AuthenticatonComponent
	],
	imports: [
		CommonModule,
		AuthenticationRoutingModule,
		SharedModule
	]
})

export class AuthenticationModule { }
