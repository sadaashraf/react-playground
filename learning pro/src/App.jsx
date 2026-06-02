import Event from "./component/even"
import Form from "./component/form"
import EmployeeCard from "./component/prop"
import User from "./component/state"
import Users from "./component/useEffect"

function App() {

  return (
    <div>
      <Form />
      <Users />
      <User />
      <Event />
      <h1>Employee List</h1>
      <EmployeeCard name="John Doe"
        position="Software Engineer"
        salary={80000} />
    </div>
  )
}

export default App
