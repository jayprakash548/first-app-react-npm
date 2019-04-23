import React, { Component } from 'react'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"Jay",
            roll: this.props.roll
        }        
    }
    fun1 = () => {
        /* this.setState(
            {
                name: "Prakash", 
                roll: "321"
            }
        ); */
        this.setState((state, props) =>{
            console.log(props.name);
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.name} and your roll is {this.state.roll}</h1>
                <button onClick={this.fun1}>Click Me</button>
            </div>
        )
    }
}
export default App;