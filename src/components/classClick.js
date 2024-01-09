import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        alert("Class button clicked")
    }
  render() {
    return (
      <div>
        <h1>This is a ClassClick component</h1>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default ClassClick
