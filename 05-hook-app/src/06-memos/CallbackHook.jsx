import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(() => {
    // setCounter(counter + 1); si hacemos el counter se memoriza en 10+1 y no
    // vuelve a cambiar mas pero esta funcion se ejecuta.
    // para ellos debemos realizar lo sieguiente:
    setCounter((value) => value + 1);
  }, []);

  // const incrementFather = () => {
  // setCounter(counter + 1);
  // };
  // recordar que las funciones no se pueden memorizar
  // si utilizamos el hook memo(ya que se almacena en posiciones
  // diferentes) por ello tenemos callbackhook el cual
  // momeriza funciones.

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
