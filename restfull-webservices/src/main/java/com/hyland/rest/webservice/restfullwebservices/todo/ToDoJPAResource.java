package com.hyland.rest.webservice.restfullwebservices.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ToDoJPAResource {

	@Autowired
	private TodoJpaRepository todoService;
	
	@GetMapping("/jpa/users/{username}/todos")
	public List<ToDo> getAllTodos(@PathVariable String username){
		return todoService.findAll();
	}
	
	@GetMapping("/jpa/users/{username}/todos/{id}")
	public ToDo getTodo(@PathVariable Long id){
		return todoService.findById(id).get();
	}
	
	@DeleteMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable Long id, @PathVariable String username){
		
		todoService.deleteById(id);
		
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<ToDo> updateTodo(@PathVariable Long id, @PathVariable String username, @RequestBody ToDo todo){
		
		ToDo updateTodo = todoService.save(todo);
		
		return new ResponseEntity<ToDo>(updateTodo, HttpStatus.OK);
	}
	
	@PostMapping("/jpa/users/{username}/todos/")
	public ResponseEntity<ToDo> saveTodo(@PathVariable Long id, @PathVariable String username, @RequestBody ToDo todo){
		
		todo.setUsername(username);
		ToDo save = todoService.save(todo);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(save.getId()).toUri();
		return  ResponseEntity.created(uri).build();
	}
	
}
