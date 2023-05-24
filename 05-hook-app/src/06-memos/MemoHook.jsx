import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (interationNumber) => {
  for (let i = 0; i < interationNumber; i++) {
    console.log("Se esta ejecutando", interationNumber);
  }

  return `${interationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(1000);
  const [show, setShow] = useState(true);

  // con useMomo guardamos el resultado si y solo
  // cambia cuadno el valor de counter cambia
  const valueMemorize = useMemo(() => {
    heavyStuff(counter);
  }, [counter]);

  // esto se estaria ejecutando cada vez
  // que el componente se carga
  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>

      <h4>{valueMemorize}</h4>

      <br />
      <button
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
