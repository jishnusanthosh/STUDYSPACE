import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice.js";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className="counter">
      <h1>Redux Counter</h1>
      <h2>Count: {count}</h2>

      <div className="buttons">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </main>
  );
}

export default App;
