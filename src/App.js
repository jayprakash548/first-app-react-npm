import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Rahul",
            city: this.props.city 
        }
    }
    /* state = {
        name: "Rahul",
        city: this.props.city
    } */
    render(){
        return(
            <h1>Hello {this.state.name}. Your city is {this.state.city}</h1>
        )
    }
}

export default App
