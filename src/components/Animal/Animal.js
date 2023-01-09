export default function Animal(arg) {
  return (
    <div className="animal" style={{ top: `${arg.top}`, left: `${arg.left}` }}>
      <h3 className="name">{arg.name}</h3>
      <img className="name"></img>
      <p className="text">{arg.says}</p>
    </div>
  );
}
