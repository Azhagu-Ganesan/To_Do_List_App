import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem.js'
import axios from 'axios';

class App extends React.Component{
 

  constructor(props)
  {
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);

  }
  handleInput(e)
  {
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
    

  }
  addItem(e)
  {
    e.preventDefault();
    const newItem= this.state.currentItem;
   
    if(newItem.text!==""){
      const newItems=[...this.state.items,newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:e.target.value,
          key:Date.now()
        }
      })
    }
    axios.post('http://localhost:8080/spring-boot-restful-post-json/additem',newItem).then(response =>{
      console.log(response)
    }).catch( error =>{
      console.log(error)
    })
  }
  deleteItem(key)
  {
    const filteredItems=this.state.items.filter(item=>
      item.key!==key);
      this.setState({
        items:filteredItems
      })
        
  }
  render()
  {
    return(
      <div className="App">
        <header>
        <form id="to-do-form" >
          <h1>To Do List</h1>
          <input type="text" placeholder="Enter Text"
          value={this.state.currentItem.text}
         onChange={this.handleInput}
         />
          <button type="submit" onClick={this.addItem}>Add</button>
        </form>
      </header>
      <ListItem items ={this.state.items}
        deleteItem={this.deleteItem}>
      </ListItem>
      </div>
      
    );
  }
}

export default App;
