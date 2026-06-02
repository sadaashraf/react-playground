import React from 'react'
import { useState, useEffect } from 'react'
function User() {
  const [name, setName] = useState("Dinayal")
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Name : {name}</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}

export default User
