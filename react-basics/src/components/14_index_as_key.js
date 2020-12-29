import React from 'react'
import Names from './12_list_rendering_refactor'
function NameList() {
    const names=[
        'Stark',
        'Steve',
        'Thor'
    
    ]

    const nameList= names.map((name,idx) =><h2 key={idx}>{idx} {name}</h2>)
    
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList