import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (  
    //   <div className="App">
    //       <h1 className="App-title">Welcome to React</h1>
    //   </div>
    // );
    return React.createElement('div',{className:'app'},React.createElement('h1', {className: 'h1-text'}, 'Welcome to React'))
  }
}

export default App;
