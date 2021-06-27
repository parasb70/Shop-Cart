import './App.css';
import NavBar from './Components/navbar';
import React, { Component, setState } from 'react';
import Counters from './Components/Counters';
import FormControl from 'react-bootstrap/FormControl';
class App extends Component {
  state = { 
    userInput:"",
    counters: [
        { id : 1 , value:0, ItemName:"Jacket"},
        { id : 2 , value:0, ItemName:"Jeans"},
        { id : 3 , value:0, ItemName:"Shoes"},
        { id : 4 , value:0, ItemName:"T-Shirt"}
    ]
 };
componentDidUpdate(){

}
 handleIncrement = counter=>{
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = {...counter};
     counters[index].value++;
     this.setState({counters});
 };
 handleDelete =counterId=> {
    const counters = this.state.counters.filter(counter=>counter.id!== counterId);
    this.setState({ counters });
    
};
handleReset=()=>{
    const counters = this.state.counters.map(c=>{
        c.value = 0;
        return c;    
        });
    this.setState({counters});   
};
addElement=()=>{
  const counters = [...this.state.counters,{id:this.state.counters.length+1,value:0,ItemName:this.state.userInput}];
  this.setState({counters});
}
  render() { 
    return ( 
      <React.Fragment>
      <NavBar TotalCounters={this.state.counters.filter(c=>c.value>0).length}/>
      <main className="container"> 
      <Counters 
      counters = {this.state.counters}
      onReset={this.handleReset} 
      onIncrement={this.handleIncrement} 
      onDelete={this.handleDelete}
      /> 
      </main>
      <FormControl
            id ="inputField"
            placeholder="add item . . . "
            size="lg"
            value = {this.state.userInput}
            onChange ={(e)=>{
                
              this.setState({userInput:e.target.value})
            }}
            aria-label="add something"
            aria-describedby="basic-addon2"
          />
          <button className="btn btn-primary btn-sm m-2" onClick={this.addElement}>
            Add Items
            </button>
      </React.Fragment>
     );
  }
}
 
export default App;