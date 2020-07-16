import { Component, OnInit } from '@angular/core';

export class ToDo {
  constructor(
    public id: number,
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

  todos = [
    new ToDo(1, 'Learn to Dance', true, new Date()),
    new ToDo(2, 'Become an expert at Angular', false, new Date()),
    new ToDo(3, 'Visit India', true, new Date()),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
