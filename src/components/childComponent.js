import React from 'react'

//Methods as propss

function ChildComponent(props) {
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={() =>props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent