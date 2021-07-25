import "./MovieDetails.scss";

const MovieDetails = (props) => {
  const { toggle, open, details } = props;
  return (
    <div className={open ? "MovieDetails open" : "MovieDetails"}>
      <div className="MovieDetails__container">
        <span className="MovieDetails__close" onClick={() => toggle()}>
          &#10005;
        </span>
        <img
          src={details?.image}
          alt={details?.fullTitle}
          className="MovieDetails__image"
        />
        <h2 className="MovieDetails__title">{details?.fullCast?.title}</h2>
        <div>
          <span>imDb Rating:</span>
          <span>
            {" "}
            {""}
            {details?.imDbRating}
          </span>
        </div>
        <div>
          <span>Metacritic:</span>
          <span>
            {" "}
            {details?.ratings?.metacritic
              ? details?.ratings?.metacritic
              : "Not rated yet"}
          </span>
        </div>
        <div>
          <span>RottenTomatoes:</span>
          <span>
            {" "}
            {details?.ratings?.rottenTomatoes
              ? details?.ratings?.rottenTomatoes
              : "Not rated yet"}
          </span>
        </div>
        <div>
          <span>tV_com:</span>
          <span>
            {" "}
            {details?.ratings?.tV_com
              ? details?.ratings?.tV_com
              : "Not rated yet"}
          </span>
        </div>
        <div>
          <span>theMovieDb:</span>
          <span>
            {" "}
            {details?.ratings?.theMovieDb
              ? details?.ratings?.theMovieDb
              : "Not rated yet"}
          </span>
        </div>
        <div className="MovieDetails__actors">
          {details?.fullCast?.actors &&
            details?.fullCast?.actors.map((item) => (
              <div key={item.id} className="MovieDetails__actor">
                <img
                  src={item?.image}
                  alt={item.name}
                  className="MovieDetails__actor-image"
                />
                <h3>{item.name}</h3>
                <div>{item.asCharacter}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
