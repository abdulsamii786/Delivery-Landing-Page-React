import "./Card.css";

const Card = ({ data }) => {
  const { title, imageUrl, paragraphText } = data;
  return (
    <div className="card-wrapper">
      <h3>{title}</h3>
      <img src={imageUrl} />
      <p>{paragraphText}</p>
      <h4>Learn More</h4>
    </div>
  );
};

export default Card;
