import { useCounter, useFetch } from "../hooks/";
import { Quote, LoadinQuote } from "./";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/episode/${counter}`
  );

  // si tuviera un retorno en igual a  = [ {..}] para acceder al primer
  // elemento tuvieramos q hacer [0]
  // y esto lo podemos arreglar algo como esto:
  // const { var1, var2 } = !!data && data[0];
  // console.log(data);
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? (
        <LoadinQuote />
      ) : (
        <Quote name={data.name} episode={data.episode} />
      )}
      <button type="button" className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </>
  );
};
