import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <div onClick={() => setCount(count + 1)}>Incrementar</div>
    </div>
  );
}

export default Counter;
