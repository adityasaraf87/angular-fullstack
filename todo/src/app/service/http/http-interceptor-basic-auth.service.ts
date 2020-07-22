import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { BasicAuthServiceService } from '../basic-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthService: BasicAuthServiceService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {

    let basicAuthToken = this.basicAuthService.getAuthenticatedToken();
    let authUser = this.basicAuthService.getAuthenticatedUser();

    if (basicAuthToken && authUser) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthToken
        }
      })
    }
    return next.handle(request);
  }

}
