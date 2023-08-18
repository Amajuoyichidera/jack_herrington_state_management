import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../App'

function ContextApi() {
    const Property = useContext(MyContext)
  return (
    <div>
        <h2>My Name is {Property.name}</h2>
        <p>I'm {Property.age} years old</p>
    </div>
  )
}

export default ContextApi