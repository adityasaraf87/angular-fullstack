package com.hyland.rest.webservice.restfullwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ToDoService {

	private static List<ToDo> todos = new ArrayList<>();
	private static int idCounter = 0;
	
	static {
		todos.add(new ToDo(++idCounter,"aditya", "Learn To Dance", new Date(), false));
		todos.add(new ToDo(++idCounter,"aditya", "Learn about Microservices", new Date(), true));
		todos.add(new ToDo(++idCounter,"aditya", "Trip to Europe", new Date(), false));
	}
	
	public List<ToDo> findAll(){
		return todos;
	}
	
	public ToDo deleteById(long id) {
		ToDo todo = findById(id);
		if(todo == null)
			return null;
		if(todos.remove(todo))
			return todo;
		return null;
	}
	
	public ToDo findById(long id) {
		for(ToDo todo:todos) {
			if(todo.getId() == id)
				return todo;
		}
		return null;
	}
	
	public ToDo save(ToDo todo) {
		if(todo.getId()==-1) {
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
		
	}
}
