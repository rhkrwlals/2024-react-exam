import React, { useState } from 'react';

export default function App() {
  const [num, setNum] = useState(0);
  
  const onBtnIncreaseClicked = () => setNum(num + 1);
  const onBtnDecreaseClicked = () => setNum(num - 1);
  
  return (
    <div>
      <p>NUM : {num}</p>
      <br/>
      <button onClick={onBtnIncreaseClicked}>+1</button>
      <button onClick={onBtnDecreaseClicked}>-1</button>
      <button onClick={() => onBtnIncreaseClicked(10)}>+10</button>
      <button onClick={() => onBtnDecreaseClicked(-10)}>-10</button>
      </div>
  );  
}

