import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserAccount } from '../classes/user-account';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userURL = environment.apiLink + '/api/users';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<UserAccount[]> {
    return this.http.get<UserAccount[]>(
      this.userURL,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }),
      }
    );
  }

  getUserById(userId: string): Observable<UserAccount> {
    return this.http.get<UserAccount>(
      this.userURL + '/' + userId,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }),
      }
    );
  }

  updateUser(user: UserAccount): Observable<any> {
    const currUser : UserAccount = JSON.parse(sessionStorage.getItem('user'));
    if(user._id === currUser._id) {
      sessionStorage.setItem('user', JSON.stringify(user));
    }
    
    return this.http.put(
      this.userURL,
      user,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
      }
    );
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(
      this.userURL + '/' + userId,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
      }
    );
  }
}
