import React, { useState } from 'react'

const Upvotes = () => {

    const [count, setCount] = useState(0) // [0, f()]

    return(
        <div>
            <div>{ count }</div>
            <button onClick={ () => setCount(count + 1) }>Up</button>
        </div>
    )

}

export default Upvotes