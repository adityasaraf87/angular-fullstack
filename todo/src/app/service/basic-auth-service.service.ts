import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URI } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthServiceService {

  constructor(private http: HttpClient) { }
  executeAuthenticationService(username, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

     let headers = new HttpHeaders({
         Authorization: basicAuthHeaderString
       })

    return this.http.get<AuthenticationBean>(
      `${API_URI}/basicauth`
      ,{headers}
    )
      .pipe(
        map(
          data => {
            sessionStorage.setItem('authenticatedUser', username);
            sessionStorage.setItem('token', basicAuthHeaderString);
            return data;
          }
        )
      );
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null)
  }

  getAuthenticatedToken() {
    return sessionStorage.getItem('token');
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser')
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }
}
export class AuthenticationBean {
  constructor(public message: string) { }
}
