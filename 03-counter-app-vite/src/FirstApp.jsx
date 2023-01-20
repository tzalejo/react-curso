import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>Hola mi primier Componente, {subTitle}</p>
      <p>{name}</p>
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
  // title: 'No hay titulo',
  subTitle: 0,
};
