import '././Animal.css';

export default function Animal(arg) {
  return (
    <div className="animal" style={{ top: `${arg.top}`, left: `${arg.left}` }}>
      <h3 className="name">{arg.name}</h3>
      <img className="name" src={`../../../public/animals/${arg.type}.svg`}></img>
      <p className="text">{arg.says}</p>
    </div>
  );
}
