import React, { useEffect, useState, useRef } from 'react'

export default function HookTimer() {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()

  useEffect(()=>{
    intervalRef.current = setInterval(()=>{
      setTimer(prevTimer => prevTimer + 1)
    },1000)
    return() =>{
      clearInterval(intervalRef.current)
    }
  },[])
  return (
    <>
      hook Timer - {timer }
      <button onClick={()=>{clearInterval(intervalRef.current)}}>clear</button>
    </>
  )
}
