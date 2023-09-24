// components/Counter.tsx
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../store/reducers/counter';
import {RootState} from '../store';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
