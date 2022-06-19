import { useReducer, useState } from "react";


type BasicCounterAction = {
  type: "INCREMENT" | "DECREMENT"
}

type SetCounterState = {
  type: "SET",
  payload: number
}

type CounterState = {
  value: number
}

type CounterAction = BasicCounterAction | SetCounterState


const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 }
    case "DECREMENT":
      return { value: state.value - 1 }
    case "SET":
      return { value: action.payload }
    default:
      return state;

  }
}


const Counter = () => {

  const [state, dispatch] = useReducer(reducer, { value: 0 })
  const [value, setValue] = useState(0);

  const increment = () => dispatch({ type: "INCREMENT" })
  const decrement = () => dispatch({ type: "DECREMENT" })
  const reset = () => dispatch({ type: "SET", payload: 0 })

  const set = (n: number) => dispatch({ type: "SET", payload: n })


  const formSubmit = (e: any) => {
    e.preventDefault()
    set(value);

  }

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{state.value}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
      </section>
      <section className="controls">
        <form onSubmit={(event) => { formSubmit(event) }}>
          <label htmlFor="set-to">Set Count</label>
          <input id="set-to" type="number" onChange={e => setValue(+e.target.value)} />
          <input type="submit" />
        </form>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
