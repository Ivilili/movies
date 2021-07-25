import "./Movie.scss";

const Movie = (props) => {
  const { id, title, description, image, getDetails, toggle } = props;
  return (
    <div className="Movie" key={id}>
      <img src={image} className="Movie__image" alt={title} />
      <h1 className="Movie__title">{title}</h1>
      <div className="Movie__name">{description}</div>

      <button
        className="Movie__button"
        onClick={() => {
          getDetails(id);
          toggle();
        }}
      >
        {" "}
        Show Details
      </button>
    </div>
  );
};

export default Movie;
