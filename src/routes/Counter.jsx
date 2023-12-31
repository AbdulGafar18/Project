import { useState } from "react";
import { useCount } from "./hooks/useCount";
import { Link } from "react-router-dom";
import "./styles.css"; 

export default function Counter() {
  const { count, increment, decrement, reset, setValue } = useCount();
  const [newCount, setNewCount] = useState("");

  function handleOnChange(e) {
    setNewCount(e.target.value);
    e.target.value = newCount;
  }

  function handleOnClick() {
    setValue(newCount);
    setNewCount("");
  }

  return (
    <div className="App">
      <div className="container1">{count}</div>
      <div className="container2"><button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>C</button> </div>

      <div className="container3">
      <input value={newCount} type="number" onChange={handleOnChange} />
      <button onClick={handleOnClick}>Set count value</button>
      <Link to="/">
        {" "}
        <p>Back to Error Page</p>{" "}
      </Link> </div>
      <h3>Created by AbdulGafar</h3>
    </div>
  );

  
}
