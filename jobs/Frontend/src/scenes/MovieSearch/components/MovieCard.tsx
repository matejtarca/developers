import React from "react";
import { Movie } from "@/scenes/MovieSearch/services/types";

type MovieCardProps = {
  movie: Movie;
};
const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="w-[200px] h-[200px] flex flex-col items-center justify-center border-2 relative overflow-hidden before:absolute before:inset-0 before:bg-gray-700 before:opacity-80 before:content-[''] before:z-10">
      <h2 className="z-20 relative text-white text-center">{movie.title}</h2>
      <p className="z-20 relative text-white">
        {movie.release_date?.split("-")[0]}
      </p>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover absolute"
        />
      )}
    </div>
  );
};

export default MovieCard;
