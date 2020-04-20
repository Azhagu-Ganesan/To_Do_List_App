package com.example.demo.bean;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ListItems {
private String text;
@Id
private long key;
public String getText() {
	return text;
}
public void setText(String text) {
	this.text = text;
}
public long getKey() {
	return key;
}
public void setKey(long key) {
	this.key = key;
}
@Override
public String toString() {
	return "ListItems [text=" + text + ", key=" + key + "]";
}



}
