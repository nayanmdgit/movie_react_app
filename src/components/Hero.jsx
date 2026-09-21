

import { Link } from "react-router";
import movieBg from "../assets/movie_image_01.jpg"

const Hero = () => {
    return (
        <div
  className="hero min-h-[79vh] items-center justify-items-end"
  style={{
    backgroundImage: `url(${movieBg})`
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-full">

        <h1 className="mb-15 text-amber-200 text-5xl font-bold px-8">
                DISCOVER MOVIES 
            </h1>
      <p className="mb-15">
        <p className="text-lg md:text-xl text-gray-200 mb-20">
                    Explore and discover your favorite movies from around the world.  
        </p>
      </p>

      <Link
                    to="/movies"
                    className="btn btn-primary text-lg font-bold px-8 bg-linear-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent hover:scale-150"
                >
                    Explore Now
      </Link>
      
    </div>
  </div>
</div>

    );
};

export default Hero;