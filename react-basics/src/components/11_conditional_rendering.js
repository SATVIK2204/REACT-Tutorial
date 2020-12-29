import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
            
        }
        this.login=this.login.bind(this)
    }
    
    login(){
        this.setState({
            isLoggedIn:true
        })
    }

    render() {
        // Approach 1

        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome Satvik
        //         </div>
        //     )
        // }
        // else{
        //     return(
        //         <div>
        //         <div>
        //         Welcome Guest              
        //     </div>
        //     <button onClick={this.login}>Log In</button>
        //     </div>
        //     )
        // }

        // Approach 2

        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome Satvik</div>
        //     return(
        //         <div>{message}</div>
        // )
        // }
        // else{
        //     message=<div>Welcome Guest</div>
        //     return(
        //         <div>{message}<button onClick={this.login}>Log In</button></div>
        // )
        // }

        //Approach 3

        
            // return this.isLoggedIn?
            // <div>Welcome Satvik</div>:
            // <div><div>Welcome Guest</div></div>

        //Approach 4

        return this.state.isLoggedIn && <div>Welcome Satvik</div>
        
        
        
    }
}

export default UserGreeting
