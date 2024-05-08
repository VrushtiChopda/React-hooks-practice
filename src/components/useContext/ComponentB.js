import React ,{useContext} from 'react'
import { UserContext,ChildContext } from '../../App'
import ComponentC from './ComponentC'
export default function ComponentB() {
    const fname = useContext(UserContext)
    const lname = useContext(ChildContext)
  return (
    <>
      <h1>{fname} {lname}</h1>
    </>
  )
}
