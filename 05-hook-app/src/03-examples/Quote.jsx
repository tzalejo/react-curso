export const Quote = ({ name, episode }) => {
  return (
    <blockquote className="blockquote text-end">
      <p className="mb-2 ">{name}</p>
      <footer className="blockquote-footer">{episode}</footer>
    </blockquote>
  );
};
