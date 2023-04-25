import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "alejo",
    email: "ale@mail.com",
  });

  const { username, email } = formState;

  // siempre hay que indicar en los useEffect la dependencia
  // esa dependencia es el segundo argumento
  // las cuales son las condiciones por la cual el useEffect
  // se vuelva a disparar
  useEffect(() => {
    // console.log("useEffect called!!");
  }, []); // si el [] esta vacio es porque queremos q se ejecute una unica vez

  // una recomendacion de react, en lugar de hacer
  // un efecto varias cosas a la vez , se recomiendo q se haga
  // efecto especializados y especificos por cada efecto
  // secundario que quieren llamar
  useEffect(() => {
    // console.log("formState changes!!");
  }, [formState]);

  useEffect(() => {
    // console.log("email changes!!");
  }, [email]);

  const onInputChange = ({ target }) => {
    // console.log(event.target.value);
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Formlario Simple</h1>

      <input
        type="text"
        name="username"
        placeholder="User Name"
        className="form-control"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="text"
        name="email"
        placeholder="Email"
        className="form-control mt-2"
        value={email}
        onChange={onInputChange}
      />
      {username === "alejo" && <Message />}
    </>
  );
};
