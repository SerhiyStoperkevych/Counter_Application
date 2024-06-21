// src/Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './action/actions.js';

const Counter = ({ count, increment, decrement, reset }) => (
  <div>
    <h2>Counter: {count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
  </div>
);

const mapStateToProps = (state) => ({
  count: state.counter.count
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
