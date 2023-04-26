import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    // esta seccion es cuando el componente
    // se construye, esto se ejecuta.
    const onMouseMove = ({ x, y }) => {
      // const coords = { x, y };
      // setCoords(coords);
      setCoords({ x, y });
    };
    // En este caso estamos construyendo un evento
    // que escucha los movimientos del mouse.
    // En este caso si el componente se destruye este(listener mousemove) sigue
    // estando vivo y ejecutando los valores x e y
    // por ello necesita que se destruya tmb el evento.
    window.addEventListener("mousemove", onMouseMove);
    // si ejecutamos muchas veces el componente este estaria
    // creando por cada ejecucion un nuevo events.
    // y generariamos una fuga de memoria.

    return () => {
      // para limpiar, en este caso, los evento listener(mousemove) devemos
      // removerlo desde esta seccion
      console.log("Message UnMounted");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      <p>{JSON.stringify(coords)}</p>
    </>
  );
};
