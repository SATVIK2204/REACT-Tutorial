import React from 'react'
import Names from './12_list_rendering_refactor'

// function NameList() {
//     const names=['Stark','Steve','Thor']
//     return (
//         <div>
//             {
//                 names.map(name=><h2>{name}</h2>)
//             }
//         </div>
//     )
// }

function NameList() {
    const names=[
        {
            name: "Stark",
            phrase: "I am Iron Man"
        },
        {
            name:'Steve',
            phrase:'I can do this All Day'
        }
    
    ]

    const nameList= names.map(names=>(
        <Names hero={names}/>
    ))
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList

