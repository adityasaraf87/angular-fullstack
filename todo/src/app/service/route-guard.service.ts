import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { BasicAuthServiceService } from './basic-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private basicAuthService:BasicAuthServiceService,private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.basicAuthService.isUserLoggedIn()){
      return true;
    }
    this.route.navigate(['login']);
    return false;
  }
  
}
