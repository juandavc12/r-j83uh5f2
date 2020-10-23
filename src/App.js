  
import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			count: 0,
		} 
    
    	updateCount(event){
		this.setState({
			count: event.target.value.length
	    });
	}
	}

	render() {
		return (
			<div className="container">
			<textarea className={this.state.count > 79 ? "textarea-error" : ""} rows="3" onChange={this.updateCount.bind(this)}></textarea>
			<div className={this.state.count > 79 ? "counter-error" : "counter"}>{this.state.count}</div>
			</div>
			);
	}


}

export default App;
