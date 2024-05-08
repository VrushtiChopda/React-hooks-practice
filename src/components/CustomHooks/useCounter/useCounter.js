import { useState } from 'react'

export default function useCounter() {
    const [counter, setCounter] = useState(initialCount)
    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () =>{
        setCounter(counter - 1)
    }
    const reset = () =>{
        setCounter(initialCount)
    }
    return [counter , increment , decrement , reset]
}
