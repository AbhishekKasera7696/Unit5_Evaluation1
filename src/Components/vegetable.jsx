import React from "react";
import './Wishlist.css'

const Vegetables = (props) => {
  let count = props.startCount;
  const [counter, setCounter] = React.useState(count);

  const handleIncrement = (value) => {
    setCounter(counter + value);
  };

  return (
    <div>
        <div className="sabzi">
            <h1>{props.name} : </h1>
            <h1>{counter}</h1>
        </div>
      
        <button onClick={() => handleIncrement(1)}>+</button>
        <button onClick={() => handleIncrement(-1)}>-</button>
    </div>
  )
}

export default Vegetables;
