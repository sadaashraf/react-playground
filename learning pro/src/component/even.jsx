import { useState } from "react";

function Event() {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter name"
          onChange={(e) => setText(e.target.value)} />
        <button type="submit">Submit</button>
        <h1>
          input : {text}
        </h1>
      </form>

    </div>
  );
  
}

export default Event;