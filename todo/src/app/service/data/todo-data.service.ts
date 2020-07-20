import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from 'src/app/listtodos/listtodos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient:HttpClient) { }

  retrieveAllToDos(username){
    return this.httpClient.get<ToDo[]>(`http://localhost:8080/users/${username}/todos`)
  }
  retrieveToDo(username,id){
    return this.httpClient.get<ToDo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }
  deleteToDo(username, id){
    return this.httpClient.delete(`http://localhost:8080/users/${username}/todos/${id}`) ;
  }
  updateTodo(username, id, todo){
    return this.httpClient.put(`http://localhost:8080/users/${username}/todos/${id}`, todo) ;
  }
  createTodo(username, todo){
    return this.httpClient.post(`http://localhost:8080/users/${username}/todos/`, todo) ;
  }
}
