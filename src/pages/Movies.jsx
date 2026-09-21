
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieDetailsModal from "../components/MovieDetailsModal";

const Movies = () => {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {

    if (!search.trim()) {
        fetch("https://api.tvmaze.com/shows?page=0")
            .then((res) => res.json())
            .then((data) => {

                const fiveStarShows = data.filter(
        (movie) => movie.rating?.average >= 8
        );


                const defaultMovies = fiveStarShows
                    .slice(0, 8)
                    .map((show) => ({
                        show: show
                    }));

                setMovies(defaultMovies);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

        return;
    }

    setLoading(true);

    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
        .then((res) => res.json())
        .then((data) => {
            setMovies(data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });

}, [search]);

    return (
        <div className="min-h-screen p-6">

            {/* Search Bar */}
            
            <div className="max-w-3xl mx-auto mb-10">
                <input
                    type="text"
                    placeholder="🔍 Search for a movie..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input input-bordered w-full text-lg"
                />
            </div>

            
            {loading && (
                <div className="text-center">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            )}

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {movies.map((movie) => (
        <MovieCard
            key={movie.show.id}
            movie={movie}
            onSeeDetails={() => setSelectedMovie(movie)}
        />
    ))}
</div>

{selectedMovie && (
    <MovieDetailsModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
    />
)}

        </div>
    );
};

export default Movies;

