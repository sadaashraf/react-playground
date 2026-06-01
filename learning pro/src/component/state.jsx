import React from 'react'
import { useState } from 'react'
function User() {
  const [name, setName] = useState("Dinayal")
  const [age, setAge] = useState(0)
  return (
    <div>
      <h1>Name : {name}</h1>
      <p>Age: {age}</p>
      <button onClick={() => setAge(age + 1)}>Birday</button>
    </div>
  )
}

export default User
