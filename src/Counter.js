import React, { useState } from 'react';

const Counter = () => {
  // Using useState to create state variable 'count' with initial value 0
  const [count, setCount] = useState(0);

  const increment = () => {
    // Function to increase count when button is clicked
    setCount(count + 1); // Updates the 'count' state
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase Count</button>
    </div>
  );
};

export default Counter;
