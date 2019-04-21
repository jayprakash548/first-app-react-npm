import React from 'react';
import PropTypes from 'prop-types';

 const App = (props) =>{
     return(
        <div>
            <h1>Hello {props.name}</h1>
        </div>
     )
 }
App.propType = {
    name: PropTypes.string
}

App.propTypes = {
    name: PropTypes.string.isRequired
}
App.defaultProps = {
    name: "Sony"
}
export default App;