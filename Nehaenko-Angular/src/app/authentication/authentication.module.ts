import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component'
import { AuthenticatonComponent } from "./authentication.component";
import { CommonModule } from "@angular/common";
import { AuthenticationRoutingModule } from "./authentication-routing.module";

@NgModule({
	declarations: [
		LoginComponent,
		RegistrationComponent,
		AuthenticatonComponent
	],
	imports: [
		CommonModule,
		AuthenticationRoutingModule
	]
})

export class AuthenticationModule { }
