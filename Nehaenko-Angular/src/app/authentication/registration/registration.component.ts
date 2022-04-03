import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { User } from 'src/app/shared/models/user.model';
import { UsersServise } from 'src/app/shared/servises/user.service';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

	form!: FormGroup;
	constructor(
		private userServise: UsersServise,
		private router: Router
	) { }

	ngOnInit(): void {
		this.form = new FormGroup({
			email: new FormControl(null, [
					Validators.required,
					Validators.email
				],
				[this.forbiddenEmail()]
			),
			pass: new FormControl(null, [
				Validators.required,
				Validators.minLength(4)
			]),
			name: new FormControl(null, [Validators.required]),
			agree: new FormControl(false, [Validators.requiredTrue])
		});
	}

	onSubmit(){
		const {email, pass, name} = this.form.value;
		console.log(this.form);
		// const user = new User(name, email, pass);
		// this.userServise.createNewUser(user).subscribe((user: User) => {
		// 	this.router.navigate(['/login'], {
		// 		queryParams: {
		// 			canLogin: true
		// 		}
		// 	});
		// });
	}
	forbiddenEmail(): AsyncValidatorFn {
		return (control: AbstractControl) : Observable<ValidationErrors | null> => {
			return this.userServise.getUserByEmail(control.value).pipe(
				map(user  => (user ? { uniqueAlterEgo: true } : null)),
				catchError(async (error) => null)
			)
		}
	}

}
