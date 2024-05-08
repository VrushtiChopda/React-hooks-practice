import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
function CounterTwo() {
    const initialValue = 0
    const [counter,setCounter] = useState(initialValue)
    const incrementFive = () =>{
        for (let i = 1  ; i <= 5; i++) {
            setCounter(preValue => preValue + 1)
        }
    }
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <Button onClick={()=>setCounter(initialValue)}>Reset</Button>{' '}
      <Button onClick={()=>setCounter(preValue => preValue + 1)}>Increment</Button>{' '}
      <Button onClick={()=>setCounter(preValue => preValue - 1)}>Decrement</Button>{' '}
      <Button onClick={incrementFive}>incrementFive</Button>
    </div>
  )
}   

export default CounterTwo
