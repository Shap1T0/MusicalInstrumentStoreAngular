import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: 'app-authentication',
	templateUrl: './authentication.component.html'
})

export class AuthenticatonComponent implements OnInit{

	constructor(private router: Router) {

	}

	ngOnInit(): void {
		this.router.navigate(['/login'])
	}
}
