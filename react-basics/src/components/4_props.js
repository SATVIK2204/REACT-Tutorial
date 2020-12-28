import React from 'react'

const GreetCustom = props => {
    console.log(props)
    return(
        <div>
        <h1>Hello {props.name} a.k.a {props.heroname}</h1>
        {props.children}
        </div>
    )
}
export default GreetCustom 