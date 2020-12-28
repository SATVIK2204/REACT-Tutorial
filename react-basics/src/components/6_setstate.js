import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     }
    
     increment(){
        //  this.setState({
        //      count: this.state.count+1
        //  },
        //  ()=>{
        //      console.log('Callback Value',this.state.count
        //      )
        //     })
        this.setState((previousstate)=>({
            count:previousstate.count+1
        }))
         console.log(this.state.count)
     }
     increment5(){
         this.increment()
        
     }
    render() {
        return (
            <div>
            <div>
                Count - {this.state.count}          
            </div>
            <button onClick={()=>this.increment5()}>Increment</button>
            </div>
        )
    }
}

export default Counter
