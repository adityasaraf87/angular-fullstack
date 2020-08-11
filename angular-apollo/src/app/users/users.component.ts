import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { AllUsersGQL } from 'src/generated/types.graphql-gen';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : any[];
  loading = true;
  error: any;
  constructor(private apollo:AllUsersGQL) { }

  ngOnInit(): void {
    this.apollo
    .watch()
    .valueChanges.subscribe(({data,loading,error}) =>{
      this.users = data.getUsers;
      this.loading = loading;
      this.error = error;
    })
  }

}
