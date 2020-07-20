import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class ToDo {
  constructor(
    public id: number,
    public username: string,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
  }
}

@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent implements OnInit {

  todos : ToDo[];
  message:string;
  constructor(private todoService:TodoDataService, private router:Router) { }

  ngOnInit(): void {
    this.retriveToDO();
  }

  private retriveToDO() {
    this.todoService.retrieveAllToDos('aditya').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  deleteToDo(id:number){
    this.todoService.deleteToDo('aditya',id).subscribe(
      response =>{
        console.log('delete successful');
        this.message = 'DeleteSuccesful';
        this.retriveToDO();
      }
    )
  }

  updateToDo(id:number){
    this.router.navigate(['todos',id]);
  }
  addToDo(){
    this.router.navigate(['todos',-1]);
  }

}
