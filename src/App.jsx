import { useState } from 'react'
import './App.css'

const options = ['Bell Pepper', 'Sausage', 'Pepperoni', 'Pineapple'];

//Static array of pizza options offered. 
export default function App() {
  const [selected, setSelected] = useState([]);
  function addPizza(option) {
    setSelected(prev => [...prev, option]);
  }
  const orderString = selected.join(", ");
  const toppings = options.map((option) => <button onClick={() => addPizza(option)}>Add {option}</button>)
  return (
    <div>
      {toppings}
      <p>Order {orderString} pizza</p>
    </div>
  )

}


















// export default function App() {
//   const [selected, setSelected] = useState([]);

//   const toggleTopping = ({target}) => {
//     const clickedTopping = target.value;
//     setSelected((prev) => {
//      // check if clicked topping is already selected
//       if (prev.includes(clickedTopping)) {
//         // filter the clicked topping out of state
//         return prev.filter(t => t !== clickedTopping);
//       } else {
//         // add the clicked topping to our state
//         return [clickedTopping, ...prev];
//       }
//     });
//   };

//   return (
//     <div>
//       {options.map(option => (
//         <button value={option} onClick={toggleTopping} key={option}>
//           {selected.includes(option) ? 'Remove ' : 'Add '}
//           {option}
//         </button>
//       ))}
//       <p>Order a {selected.join(', ')} pizza</p>
//     </div>
//   );
// }


