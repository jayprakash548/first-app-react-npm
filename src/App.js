// import React from 'react';

// const App = props =>{
//     return <h1>Hello Jay Prakash Kumar {props.children}</h1>
// }

// export default App;

import React, {Component} from 'react';

class App extends Component {
    render(){
        return(
            <div>
                <h1>Hello Mr. Jay!. {this.props.children}</h1>
            </div>
        )
    }
}

export default App;