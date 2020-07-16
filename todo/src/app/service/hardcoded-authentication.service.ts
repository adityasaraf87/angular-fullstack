import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username, password):boolean{
    if(username==='aditya' && password==='1234'){
      console.log('reached here');
      sessionStorage.setItem('authenticateUser',username); 
      return true;
    }
    return false;
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem('authenticateUser');
  }
}
