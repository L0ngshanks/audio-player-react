import React, { useState } from 'react';
// css
import './assets/css/App.css';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './slices/counterSlice';

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <input
          value={incrementAmount}
          onChange={(evt) => setIncrementAmount(evt.target.value)}
        />
        <button
          aria-label="Increment value by amount"
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
        >
          Increment by Amount
        </button>
      </div>
    </div>
  );
}

export default App;
