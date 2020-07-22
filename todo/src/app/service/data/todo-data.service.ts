import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from 'src/app/listtodos/listtodos.component';
import { API_URI } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient:HttpClient) { }

  retrieveAllToDos(username){
    return this.httpClient.get<ToDo[]>(`${API_URI}/users/${username}/todos`)
  }
  retrieveToDo(username,id){
    return this.httpClient.get<ToDo>(`${API_URI}/users/${username}/todos/${id}`)
  }
  deleteToDo(username, id){
    return this.httpClient.delete(`${API_URI}/users/${username}/todos/${id}`) ;
  }
  updateTodo(username, id, todo){
    return this.httpClient.put(`${API_URI}/users/${username}/todos/${id}`, todo) ;
  }
  createTodo(username, todo){
    return this.httpClient.post(`${API_URI}/users/${username}/todos/`, todo) ;
  }
}
