import React from 'react'

function Names({hero}) {
    return (
        <div>
            <h1>{hero.name}. My phrase is "{hero.phrase}"</h1><br/>
        </div>
    )
}

export default Names
