import React, { Component } from 'react'

export class Form extends Component {
constructor(props) {
    super(props)

    this.state = {
         username:"",
         topic:'react'
    }
}
    usernameChange=(event)=>{
            this.setState({
                username:event.target.value
            })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    submithandler=event=>{
        alert(`${this.state.username} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.submithandler}> 
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.usernameChange}/>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='react'>React</option>
                        <option value='vue'>Angular</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
