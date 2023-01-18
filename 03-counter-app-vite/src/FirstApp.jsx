import { Fragment } from "react";
import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>Hola mi primier Componente, {subTitle}</h2>
    </>
  );
};

// aqui estoy validando que tipo de datos envio desde el componente padre, en este caso string y requerido.
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
};

// para asignar valor por defecto a los props desestructurada.
FirstApp.defaultProps = {
  title: "No hay titulo",
  subTitle: 0,
};
