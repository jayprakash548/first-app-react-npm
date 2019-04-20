import React, {Component, Fragment} from 'react';

// let names = <h1>Hello Jay Prakash Kumar! You are a Good Developer</h1>
class App extends Component{
    render(){
        return (
            <Fragment>
                <h1>Introduction</h1>
                <p>My Name is Jay Prakash Kumar</p>
            </Fragment>
            // <> // Not support to every Browser
            //     <h1>Introduction</h1>
            //     <p>My Name is Jay Prakash Kumar</p>
            // </>
        );
    }; 
};
export default App;


