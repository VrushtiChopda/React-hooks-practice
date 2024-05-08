//---------------------multiple reducer-------------------------

import React, { useReducer, useState } from 'react'
const initialValue = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialValue
        default:
            return state
    }
}
function CounterThree() {
    const [count, dispatch] = useReducer(reducer, initialValue)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialValue)
    return (
        <>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>increment</button>
            <button onClick={() => dispatch('decrement')}>decrement</button>
            <button onClick={() => dispatch('reset')}>reset</button>
            <div>
                <div>Count - {countTwo}</div>
                <button onClick={() => dispatchTwo('increment')}>increment</button>
                <button onClick={() => dispatchTwo('decrement')}>decrement</button>
                <button onClick={() => dispatchTwo('reset')}>reset</button>
            </div>
        </>
    )
}

export default CounterThree
