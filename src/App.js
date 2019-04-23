import React, { Component } from 'react'

class App extends Component {
    constructor(props){
        super(props);
        // this.fun1 = this.fun1.bind(this);
        this.state = {
            name:"Jay",
            roll: this.props.roll
        };
        
    }
    /* fun1() {
        console.log("You clicked", this);
    } */
    
    fun1 = () => {
        console.log("You clicked", this);
    }
    render(){
        return(
            <div>
                <h1>Hello Jay!</h1>
                <h2>{this.props.children}</h2>
                <h3>Your roll is: {this.state.roll}</h3>
                <button onClick={this.fun1}>Click Me</button>
            </div>
        )
    }
}

export default App;