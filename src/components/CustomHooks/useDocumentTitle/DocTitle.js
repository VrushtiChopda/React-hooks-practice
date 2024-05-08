import React, { useState } from 'react'
import UseDocumentTitle from './useDocumentTitle'

export default function DocTitle() {
    const [counter,setCounter] =  useState(0)

    UseDocumentTitle(counter)
  return (
    <>
      <button onClick={()=>{setCounter(counter + 1)}}>Counter - {counter}</button>
    </>
  )
}
