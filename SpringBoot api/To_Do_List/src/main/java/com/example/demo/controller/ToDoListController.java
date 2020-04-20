package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.bean.ListItems;
import com.example.demo.repo.ListItemsRepo;

@RestController
public class ToDoListController {
	@Autowired
	ListItemsRepo repo;
	
	@PostMapping(path="/additem")
	@CrossOrigin(origins="http://localhost:3000")
	public ListItems AddItem(@RequestBody ListItems t)
	{
		System.out.println(t);
		repo.save(t);
		return t;
		
	}
	
}
