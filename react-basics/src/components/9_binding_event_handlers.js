import React, { Component } from 'react'

class EventClick extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }

        // this.clickHandler=this.clickHandler.bind(this)
    }
    
    // clickHandler(){
    //     this.setState({
    //         message:"Goodbye"
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message:"Goodbye"
        })
    }
    render() {
        return (
            // First approach

            // <div>
            //     <div>{this.state.message}</div>
            //     <button onClick={this.clickHandler.bind(this)}>Click</button>
            // </div>

            // Second approach

            // <div>
            //     <div>{this.state.message}</div>
            //     <button onClick={()=>this.clickHandler()}>Click</button>
            // </div>

            // Third Approach

            // constructor(props) {
            //     super(props)
            
            //     this.state = {
            //          message: "Hello"
            //     }
        
            //     this.clickHandler=this.clickHandler.bind(this)
            // }

            // Fourth Approach

            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventClick

