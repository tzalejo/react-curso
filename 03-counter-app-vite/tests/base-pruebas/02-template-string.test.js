import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Prueba en 02 template string", () => {
  test("getSaludos debe de retornar Hola Fernado", () => {
    const name = "Fernando";

    const msg = getSaludo(name);

    expect(msg).toBe(`Hola ${name}`);
  });
});
