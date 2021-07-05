import React, {Component} from 'react';

class App extends Component{

 state ={
   age:28,
   name : 'Fahim Ashfak',
   profession: 'Software Engineer'
 }; 

  render(){
    return (<div>
            <p>My Name is {this.state.name}</p>
            <p>My Age is : {this.state.age}</p>            
            <p>My Profession is  {this.state.profession}</p>
            <button>Click to Increase</button>
            </div> )
  }
}


export default App;
