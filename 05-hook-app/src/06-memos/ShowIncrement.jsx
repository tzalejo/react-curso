import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("se genero");

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => increment()}
    >
      Incrementar
    </button>
  );
});
