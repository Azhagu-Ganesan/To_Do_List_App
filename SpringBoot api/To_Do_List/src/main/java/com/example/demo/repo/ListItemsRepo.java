package com.example.demo.repo;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.bean.ListItems;

public interface ListItemsRepo extends CrudRepository<ListItems, Integer>
{
	
}