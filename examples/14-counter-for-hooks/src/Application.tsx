import { ChangeEvent, useState } from "react";




const Counter = () => {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(+event.target.value)
  }

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
      </section>
      <section className="controls">
        <form onSubmit={() => { }}>
          <label htmlFor="set-to">Set Count</label>
          <input id="set-to" type="number" value={count} onChange={onChangeInput} />
          <input type="submit" />
        </form>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
