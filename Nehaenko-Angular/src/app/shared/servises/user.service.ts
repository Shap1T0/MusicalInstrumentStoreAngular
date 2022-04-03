import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UsersServise {
	constructor(private http: HttpClient) {}

	getUserByEmail(email: string): Observable<User> {
		return this.http.get<User>(
			`http://localhost:43516/api/User/email/${email}`
		);
	}

	createNewUser(user: User): Observable<User> {
		return this.http.post<User>('http://localhost:43516/api/User', user);
	}
}
