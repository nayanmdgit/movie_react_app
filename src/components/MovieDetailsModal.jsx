const MovieDetailsModal = ({ movie, onClose }) => {
    if (!movie) return null;

    const show = movie.show;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-base-100 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                
                <button
                    onClick={onClose}
                    className="btn btn-sm btn-circle absolute right-3 top-3 z-10"
                >
                    ✕
                </button>


                {/* poster */}

                {show.image?.original && (
                    <img
                        src={show.image.original}
                        alt={show.name}
                        className="w-full max-h-[80vh] object-cover"
                    />
                )}

                {/* Movie Information */}
                <div className="p-6">

                    <h2 className="text-3xl font-bold mb-4">
                        {show.name}
                    </h2>

                    <div className="flex flex-wrap gap-4 mb-5">
                        <span>
                            ⭐ {show.rating?.average || "N/A"}
                        </span>

                        <span>
                            📅 {show.premiered || "N/A"}
                        </span>

                        <span>
                            🎬 {show.runtime || "N/A"} min
                        </span>
                    </div>

                    {/* Genre */}

                    {show.genres?.length > 0 && (
                        <div className="mb-5">
                            <h3 className="font-bold text-lg mb-2">
                                Genre
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {show.genres.map((genre) => (
                                    <span
                                        key={genre}
                                        className="badge badge-primary"
                                    >
                                        {genre}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Summary */}

                    <div>
                        <h3 className="font-bold text-lg mb-2">
                            Overview
                        </h3>

                        <div
                            className="text-base-content/70"
                            dangerouslySetInnerHTML={{
                                __html:
                                    show.summary ||
                                    "No summary available.",
                            }}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MovieDetailsModal;