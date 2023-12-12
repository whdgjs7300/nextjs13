'use client'
import React, { useState } from 'react'



export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=> setCount((num)=>num + 1)}>숫자증가</button>
        </div>
    )
}
