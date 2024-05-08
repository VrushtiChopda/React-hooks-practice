//-----------------complex state & action--------------------------

import React, { useReducer } from 'react'
const initialValue = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'increment5':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement5':
            return { ...state, firstCounter: state.firstCounter - action.values }
        case 'reset':
            return initialValue
        default:
            return state
    }
}
function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialValue)
    return (
        <>
            <div>Count - {count.firstCounter}</div>
            <div>Second Count - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>decrement</button>
            <button onClick={() => dispatch({ type: 'increment5', value: 5 })}>increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement5', value: 5 })}>decrement 5</button>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>increment</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>decrement</button>
            </div>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </>
    )
}

export default CounterTwo   
