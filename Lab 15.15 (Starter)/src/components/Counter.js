import Redux, { useSelector, useDispatch } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import classes from './Counter.module.css';
const instate = { counter: 0, showCounter: true };
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const TOGGLE = 'TOGGLE';
export const counterProducer = (state = instate, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign(
        {},
        { counter: state.counter + 1, showCounter: state.showCounter }
      );
    case DECREMENT:
      return Object.assign(
        {},
        { counter: state.counter - 1, showCounter: state.showCounter }
      );
    case TOGGLE:
      return Object.assign(
        {},
        { counter: state.counter, showCounter: !state.showCounter }
      );
    default:
      return state;
  }
};
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const incrementCounter = () => {
    return { type: 'INCREMENT' };
  };
  const decrementCounter = () => {
    return { type: 'DECREMENT' };
  };
  const toggleCounter = () => {
    return { type: 'TOGGLE' };
  };
  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };
  const incrementCounterHandler = () => {
    dispatch(incrementCounter());
  };
  const decrementCounterHandler = () => {
    dispatch(decrementCounter());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
