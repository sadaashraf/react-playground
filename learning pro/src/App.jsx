// import Event from "./component/even"
// import Form from "./component/form"
// import EmployeeCard from "./component/prop"
// import User from "./component/state"
// import Users from "./component/useEffect"
import axios from "axios"
import { useState, useEffect } from "react"
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes')
      .then(response => {
        setJokes(response.data);
      })
      .catch(error => {
        console.error('Error fetching jokes:', error);
      });
  },);
  return (
    <div>
      <p>jokes:{jokes.length}</p>
      {jokes.map(joke => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}

      {/* <Form />
      <Users />
      <User />
      <Event />
      <h1>Employee List</h1>
      <EmployeeCard name="John Doe"
        position="Software Engineer"
        salary={80000} /> */}
    </div>
  )
}

export default App
