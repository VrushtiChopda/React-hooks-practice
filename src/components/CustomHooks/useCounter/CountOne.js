import React, { useState } from 'react'
import { useCol } from 'react-bootstrap/esm/Col'
import useCounter from './useCounter'

export default function CountOne() {
    const [counter , increment , decrement , reset] = useCounter()
    return (
    <>
      <div>Counter - {counter}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={increment}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </>
  )
}
