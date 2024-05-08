import React,{useState,useEffect} from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
    useEffect(()=>{
        console.log('updating')
        document.title = `you clicked ${count} times`
    },[count])
  return (
    <div>
        <input 
            type='text'
            value={name}
            onChange={e =>setName(e.target.value) }
        />
      <button onClick={()=>{setCount(count + 1)}}>Counter {count}</button>
    </div>
  )
}

export default Counter      