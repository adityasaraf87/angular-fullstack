import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private hardcodedAuthService:HardcodedAuthenticationService,private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcodedAuthService.isUserLoggedIn()){
      return true;
    }
    this.route.navigate(['login']);
    return false;
  }
  
}
