import React from 'react';

/* function blog(){
    return <h1> Hello Jay!</h1>
} */

/* const Blog = (props) =>{
    return <h1> Hello {props.name}!</h1>;
}
export default Blog; */
// const name = "Jay Singh";

/* const fun = (nm) =>{
    return nm;
}

const user = {
    name: 'Jay',
    designation: 'Software Engineer'
}
const el = <h1>Hello { user.designation } </h1>

export default el; */

 const Blog = (props) =>{
     return(
         <div>
             <h1>{props.name}</h1>
             <h1>{props.roll}</h1>
             <h1>{props.city}</h1>
         </div>
     )
 }
 export default Blog;