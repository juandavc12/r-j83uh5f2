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
			<textarea className={this.state.count > 79 ? "textarea-error" : ""} rows="3" onChange={this.contar.bind(this)}></textarea>
			<div className={this.state.count > 79 ? "counter-error" : "counter"}>{this.state.count}</div>
			</div>
    ); 
  }
}

export default App;
