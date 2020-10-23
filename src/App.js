import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super ();

    this.state = {
      count : 0
    }
  };

  contar (event) {
    this.setState({count: event.target.value.length})
  }

  render() {
    return (
			        <div className="container">
       			 	<textarea rows="3" onChange={this.count}></textarea>
        			<div className="counter">{this.state.count}</div>
      </div>
    ); 
  }
}

export default App;
