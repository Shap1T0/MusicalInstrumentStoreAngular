import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersServise } from 'src/app/shared/servises/user.service';
import { User } from 'src/app/shared/models/user.model';
import { Message } from 'src/app/shared/models/message.module';
import { AuthenticationService } from 'src/app/shared/servises/authentication.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	form!: FormGroup;
	message!: Message;
	constructor(
		private usersServise: UsersServise,
		private authenticationService: AuthenticationService,
		private router: Router,
		private route: ActivatedRoute
		) {}

	ngOnInit(): void {
		this.message = new Message('danger', '');
		this.route.queryParams.subscribe((params: Params) => {
			if(params['canLogin']){
				this.showMessage('Теперь вы можете войти в систему', 'success');
			}
		});
		this.form = new FormGroup({
			email: new FormControl(null, [
				Validators.required,
				Validators.email,
			]),
			password: new FormControl(null, [
				Validators.required,
				Validators.minLength(4),
			]),
		});
	}

	private showMessage(text: string, type: string = 'danger') {
		this.message = new Message(type, text);
		window.setTimeout(() => {
			this.message.text = '';
		}, 3000);
	}

	onSubmit() {
		const data = this.form.value;
		this.usersServise.getUserByEmail(data.email).subscribe((user: User) => {
			if (user) {
				if (user.pass === data.password) {
					this.message.text = '';
					window.localStorage.setItem('user', JSON.stringify(user));
					this.authenticationService.login();
					this.router.navigate(['system']);
				}
				else {
					this.showMessage('Пароль неверный');
				}
			}
			else {
				this.showMessage('Такого пользователя не существует');
			}
		});
		console.log(this.form);
	}
}
