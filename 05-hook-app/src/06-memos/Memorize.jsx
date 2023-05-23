import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(1);

  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <br />
      <button
        // hacemos esta notacion porque estamos
        // enviando un argumento en el usecounter
        onClick={() => increment()}
        type="button"
        className="btn btn-primary mt-2"
      >
        +1
      </button>
      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-primary mt-2"
        type="button"
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
