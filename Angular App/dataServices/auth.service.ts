import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { UserAccount } from '../classes/user-account';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private loginURL = environment.apiLink + '/api/auth/login';
    private registerURL = environment.apiLink + '/api/auth/register';

    constructor(
        private http: HttpClient
    ) { }

    login(credentials: Credentials): Observable<Token> {
        return this.http.post<Token>(
            this.loginURL,
            credentials,
            {
                headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
            }
        );
    }

    register(user: UserAccount): Observable<any> {
        return this.http.post(
            this.registerURL,
            user,
            {
                headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
            }
        );
    }
}

export class Credentials {
    username: string;
    password: string;
}

export class Token {
    userId: string;
    success: string;
    token: string;
}
