// Agrupamos las pruebas:
describe("Pruebas en <Demo Component 2>", () => {
  test("should first", () => {
    // Evaluar

    // 1. inicializacion
    const message1 = "Hola mundo";

    // 2. estimulo
    const message2 = message1.trim();

    // 3. Observar el comportamiento -- esperado
    expect(message1).toBe(message2);
  });
});
