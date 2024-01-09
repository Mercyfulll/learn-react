import React from 'react'

function FunctionClick() {
    function clickHandler(){
        alert('Button clicked!')
    }
  return (
    <div>
        <h1>This is a FunctionClick component</h1>
      <button onClick={clickHandler}>click</button>
    </div>
  )
}

export default FunctionClick
