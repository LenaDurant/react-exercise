import { useState } from "react";

function RepetitionExercise () {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{name}</h3>
      <h4>{count}</h4>

      <button onClick={() => setCount(count + 1)}> Add a Rep
      </button>

      <button onClick={() => setCount(0)}> Reset
      </button>
    </div>
  );
}
export default RepetitionExercise;