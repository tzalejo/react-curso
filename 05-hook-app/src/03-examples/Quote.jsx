import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ name, episode }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [episode]);

  return (
    <>
      <blockquote style={{ display: "flex" }} className="blockquote text-end">
        <p className="mb-2" ref={pRef}>
          {name}
        </p>
        <footer className="blockquote-footer">{episode}</footer>
      </blockquote>
      <div>{JSON.stringify(boxSize)}</div>
    </>
  );
};
