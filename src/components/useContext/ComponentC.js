import React from 'react'
import { UserContext } from '../../App'
export default function ComponentC() {
  return (
    <>
    <UserContext.Consumer>
       {
        user =>{
            return <h1>My name is {user}</h1>
        }
       }
    </UserContext.Consumer>
    
    </>
  )
}
