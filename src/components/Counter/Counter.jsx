import { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = ({ initialValue = 0, capacity }) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    if (count < capacity) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > initialValue) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.CounterContainer}>
      <button onClick={handleDecrement} disabled={count <= initialValue}>
        -
      </button>
      <p>{count}</p>
      <button onClick={handleIncrement} disabled={count >= capacity}>
        +
      </button>
    </div>
  )
}

export default Counter
