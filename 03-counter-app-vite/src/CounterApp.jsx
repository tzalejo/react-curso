import { useState } from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const resetButton = () => setCounter(value);

  const handleSubstract = () => setCounter(counter - 1);

  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter((c) => c + 1);
  };

  return (
    <Fragment>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>Mi Boton +1</button>
      <button onClick={handleSubstract}>Mi Boton -1</button>
      <button onClick={resetButton}>Reset</button>
    </Fragment>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
