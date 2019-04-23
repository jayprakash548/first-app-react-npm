import React from 'react'

const App = (props) =>{
    const fun1 = (e) =>{
        e.preventDefault();
        console.log("You clicked");
    }
    return(
        <div>
            <h1>Hello {props.name}</h1>
            <a href="https://www.google.com" onClick = {fun1}>Anchor CLick</a>            
        </div>
    )
}

export default App;