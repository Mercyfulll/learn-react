import React from "react";

// function Greet(){
//     return <h1>Hello Sakhile</h1>
// }

const Greet = props => {

   return (
   <div>
      <h1>Greet component</h1> 
      <div>Hello {props.name}</div>
   </div>
   )

}
export default Greet