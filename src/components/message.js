import React, {Component} from "react";

class Message extends Component{

    //Constructor() a method used to initialize an object's state in a class
    constructor(){
        super()
            this.state = {
                message : 'Welcome visitor '
            }
    }

    changeMessage(){
        // A method you call to alter the state of a class component
        this.setState({
            message : 'Thank you for subscribing 😊'
        })
    }

    render(){
        return (
        <div>
            <h1>This is a message component</h1>
            <div>{this.state.message}</div>
            {/* Button with an event on click and a handler */}
            <button onClick={()=> this.changeMessage()}>Subscribe</button>
        </div>
        )
    }
}

export default Message