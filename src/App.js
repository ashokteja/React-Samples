import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      buyItems :['mango','bannan','apple'],
      message:''
     
    }
  } 

  addItem(e){
    e.preventDefault();
    const {buyItems} = this.state;
    const newItem = this.newItem.value;

    if(newItem == ''){
      this.setState({
        message:'Enter Item Name.'
      })
    }
    else{
    const isOnTheList = buyItems.includes(newItem);
    if(isOnTheList){
      this.setState({
        message:'This Item already in the list'
      })
    }
    else{
     
       this.setState({
        buyItems : [...this.state.buyItems,newItem],
        message :'',
        newItem:''
      })
    }
    
    this.addform.reset();
   }
  }

  removeItem(item){
     
    const newButItems = this.state.buyItems.filter(butItem=>{
      return butItem   !== item
    });
    this.setState({
      buyItems:[...newButItems] 
    })
   if(newButItems.length ==0){
     this.setState({
       message :'No Items in The List, Add some Items.',
     })
   }
  }

  render() {
    const {buyItems,message,newItem} = this.state;
    return (
      <div className="container">
      <header>  
       <h2>To Do List</h2>
       <form className="form-inline" onSubmit={(e)=> {this.addItem(e)}}  
        ref={input=> this.addform = input}
       >
       <div className="form-group">
             <label  className="sr-only" htmlFor="newItemInput">Add New Item</label>
             <input type="text" name="item" placeholder="Enter Item" className="form-control"
             ref={input=> this.newItem = input}
             />
       </div>
       <button name="submit" type="submit" className="btn btn-primary"  >Add Item</button>
       </form>
       </header><br/>
      
   <div className="content">
   {
     (message !== '' || buyItems.length === 0)  && <p className="message text-danger">{message}</p>
   }
  
    {
      buyItems.length > 0 && 

  <table className="table">
  <thead>
     <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Action</th>
       
    </tr>
  </thead>
  <tbody>
    {  
      buyItems.map(item =>{
            return (
               <tr key={item}>
              <td>1</td>
              <td >{item}</td>
              <td><button onClick={(e)=>{this.removeItem(item)}} className="btn btn-default btn-sm" >Remove</button></td>
            </tr>
            )
      })
    
    }
     
  </tbody>
</table>
  }
          </div>
      </div>
      
    );
  }
}

export default App;
