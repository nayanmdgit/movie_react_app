const MovieCard = ({ movie, onSeeDetails }) => {
    const show = movie.show;

    return (
        <div className="card bg-base-100 shadow-xl">

            <figure>
                <img
                    src={show.image?.medium}
                    alt={show.name}
                    className="w-full h-80 object-cover"
                />
            </figure>

            <div className="card-body">

                <h2 className="card-title">
                    {show.name}
                </h2>

                <p>
                    📅 {show.premiered || "N/A"}
                </p>

                <p>
                    ⭐ {show.rating?.average || "N/A"}
                </p>

                <div className="card-actions justify-end">

                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            console.log("BUTTON CLICKED");
                            console.log("MOVIE:", movie);

                            if (onSeeDetails) {
                                onSeeDetails();
                            } else {
                                console.log("onSeeDetails is missing!");
                            }
                        }}
                    >
                        See Details
                    </button>

                </div>

            </div>
        </div>
    );
};

export default MovieCard;