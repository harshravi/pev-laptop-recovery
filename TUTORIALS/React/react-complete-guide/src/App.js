import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  swithNameHandler = (newName) => {
    // console.log('Was Clicked!');
    //DON'T DO THIS: this.state.persons[0].name = 'maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  render() {
    return (
      <div className="App" >
        <h1>Hi, I'm React App</h1>
        <p>This is really Working</p>
        <button onClick={() => this.swithNameHandler('Maximilian!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} click={this.swithNameHandler.bind(this, 'Max!')} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div >
    )
    // return React.createElement('div', {className: 'App'}, 
    //  React.createElement('h1', null, 'Hi, I\'m a React App !!!')
    // );
  }
}

export default App;
