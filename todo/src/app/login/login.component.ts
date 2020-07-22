import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthServiceService } from '../service/basic-auth-service.service';
import { HttpInterceptor } from '@angular/common/http';
import { HttpInterceptorBasicAuthService } from '../service/http/http-interceptor-basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'aditya';
  password = '';
  errorMessage= 'Invalid Credentials';
  invalidLogin:boolean= false;

  constructor(private router:Router,public hardCodeAuthentication:HardcodedAuthenticationService, private basicAuthenticationService:BasicAuthServiceService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.hardCodeAuthentication.authenticate(this.username,this.password)){
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    }
    else{
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
   
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log('inside auth '+data)
            this.invalidLogin = false;
            this.router.navigate(['welcome', this.username]);     
          },
          error => {
            console.log(error)
            this.invalidLogin = true
          }
        )
  }
  handleJWTAuthLogin() {
   
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log('inside auth '+data)
            this.invalidLogin = false;
            this.router.navigate(['welcome', this.username]);     
          },
          error => {
            console.log(error)
            this.invalidLogin = true
          }
        )
  }

}
