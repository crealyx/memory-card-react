const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imgSrc} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
};

export default Card;
