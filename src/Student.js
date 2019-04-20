/* import React, { Component } from 'react';

class Student extends Component {
    render(){
        return <h1>Hi {this.props.name}</h1>;
    }
}

export default Student; */
import React from 'react';
import Blog from './blog';

const Student = () =>{
    return(
        <div>
            <Blog name="Jay" roll="123" city="Chandigarh"/>
            <Blog name="Prakash" roll="345" city="Patna"/>
            <Blog name="Rahul" roll="567" city="Panchkula"/>
        </div>
    )
}
export default Student;