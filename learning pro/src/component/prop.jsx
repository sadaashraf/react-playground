function EmployeeCard(Props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <h2>{Props.name}</h2>
      <p>Position: {Props.position}</p>
      <p>Salary: ${Props.salary}</p>
    </div>
  );
}

export default EmployeeCard;