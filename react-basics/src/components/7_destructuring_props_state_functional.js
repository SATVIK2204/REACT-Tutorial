import React from 'react'

// Way 1

// const GreetCustom = ({name,heroname}) => {
    
//     return(
//         <div>
//         <h1>
//             Hello {name} a.k.a {heroname}
//         </h1>
        
//         </div>
//     )
// }
// export default GreetCustom 

// Way 2
const GreetCustom = props => {
    const {name,heroname}= props
    return(
        <div>
        <h1>
            Hello {name} a.k.a {heroname}
        </h1>
        
        </div>
    )
}
export default GreetCustom 