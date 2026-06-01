import EmployeeCard from "./component/card"

function App() {

  return (
    <div>
      <h1>Employee List</h1>
      <EmployeeCard name="John Doe" position="Software Engineer" salary={80000} />
      <EmployeeCard name="Jane Smith" position="Product Manager" salary={90000} />
      <EmployeeCard name="Alice Johnson" position="UX Designer" salary={75000} />
    </div>
  )
}

export default App
