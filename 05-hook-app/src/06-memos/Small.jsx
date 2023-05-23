import { memo } from "react";

// memo me permite memorizar todo lo que contiene todo el componente
// solo cuando los propry cambian entonces se va a
// ejecutar

export const Small = memo(({ value }) => {
  console.log("Se ejecuto Small");
  return <small>{value}</small>;
});
