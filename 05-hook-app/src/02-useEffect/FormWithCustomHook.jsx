import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onResetForm, onInputChange, username, email, password } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // como enviamos los parametros ya desectruturada lo podemos
  // ver arriba que obtenemos cada paramentro.
  // const { username, email, password } = formState;

  return (
    <>
      <h1>Formlario con custom Hook</h1>

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

      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        className="form-control mt-2"
        value={password}
        onChange={onInputChange}
      />
      <button
        onClick={onResetForm}
        type="button"
        className="btn btn-primary mt-2"
      >
        Borrar
      </button>
    </>
  );
};
