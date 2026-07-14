import { useState } from "react";
import "./App.css";

const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];

export default function App() {
  const [selected, setSelected] = useState([]);

  function addRemovePizza(option) {
    if (selected.includes(option)) {
      // Remove the topping
      setSelected(prev => prev.filter(item => item !== option));
    } else {
      // Add the topping
      setSelected(prev => [...prev, option]);
    }
  }

  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          onClick={() => addRemovePizza(option)}
        >
          {selected.includes(option) ? "Remove" : "Add"} {option}
        </button>
      ))}

      <p>Order a {selected.join(", ")} pizza</p>
    </div>
  );
}