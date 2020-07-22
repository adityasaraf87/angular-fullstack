import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthServiceService } from '../service/basic-auth-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public basicAuthService:BasicAuthServiceService) { }

  ngOnInit(): void {
    this.basicAuthService.logout();
  }

}
