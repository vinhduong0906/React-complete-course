import Redux, { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { actions } from '../store';
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch(actions.toggleCounter());
  };
  const incrementCounterHandler = () => {
    dispatch(actions.increment());
  };
  const decrementCounterHandler = () => {
    dispatch(actions.decrement());
  };
  const increaseCounterHandler = () => {
    dispatch(actions.increase(10));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={increaseCounterHandler}>Increase(10)</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
