import React from "react";



const Hello = () => {
    //## JSX version of Hello component 
    // return(
    //     <div>
    //         <h1>Hello Sakhile</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
         {id : 'Hello', className : 'dummyClass'}, 
         React.createElement('h1', null, 'Hello Sakhil'))
}

export default Hello