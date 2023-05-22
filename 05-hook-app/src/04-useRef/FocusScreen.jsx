import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  const onClickBtn = () => {
    // document.querySelector("input").select();
    inputRef.current.select();
  };

  return (
    <>
      <h1 className="">Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        className="form-control"
        type="text"
        placehoder="Ingrese su nombre"
      />
      <button
        onClick={onClickBtn}
        type="button"
        className="btn btn-primary mt-2"
      >
        Focus Select
      </button>
    </>
  );
};
