import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : any[];
  loading = true;
  error: any;
  constructor(private apollo:Apollo) { }

  ngOnInit(): void {
    this.apollo
    .watchQuery({
      query: gql`{
        
          getUsers{
           name,
           email
         }
         
      }`,
    })
    .valueChanges.subscribe(({data,loading,error}) =>{
      this.users = data.getUsers;
      this.loading = loading;
      this.error = error;
    })
  }

}
