import Event from "./component/even"
import EmployeeCard from "./component/prop"
import User from "./component/state"

function App() {

  return (
    <div>
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
