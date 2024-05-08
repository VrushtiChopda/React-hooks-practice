import React, { useReducer } from 'react'
const initialValue = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialValue
        default :
            return state 
    }
}

function CounterOne() {
    const [count,dispatch] = useReducer(reducer,initialValue)
    return (
        <>
            <div>Count - {count}</div>
            <button onClick={()=> dispatch('increment')}>increment</button>
            <button onClick={()=> dispatch('decrement')}>decrement</button>
            <button onClick={()=> dispatch('reset')}>reset</button>
        </>
    )
}

export default CounterOne
