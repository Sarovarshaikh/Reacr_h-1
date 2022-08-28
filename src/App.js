import './App.css';

import ClassComp from './Components/ClassComp';
import React from 'react';
import FnComp from './Components/FnComp';

class App extends React.Component{
  state = {
    showFn : false,
    showClass : false
    
  }
  
  render(){
    return (
      <div className="App">
        <p><h1>React Styling Using Class and Functional Components </h1></p>
        <div className='btn-container'>
          <button className='btn' onClick={()=>this.setState({showFn: !this.state.showFn})}>Click to see functional component</button>
          <button className='btn' onClick={()=>this.setState({showClass: !this.state.showClass})}>Click to see class component</button>
        </div>
      
        <div className='comp-container'>
          {this.state.showClass && <ClassComp/>}
          
          {this.state.showFn && <FnComp/>}
        
        </div>
      </div>
    );
  }
}

export default App;