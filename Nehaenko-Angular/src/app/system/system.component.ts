import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-system',
	templateUrl: './system.component.html',
	styleUrls: ['./system.component.css'],
})
export class SystemComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {
		this.router.navigate(['/system/board']);
	}
}
