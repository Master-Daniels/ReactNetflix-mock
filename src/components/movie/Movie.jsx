import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase.config";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ movie }) => {
  const [like, setLike] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const { user } = UserAuth();

  const movieId = doc(db, "users", `${user?.email}`);

  const saveMovie = async () => {
    if (saved) {
      alert("Movie already saved");
      return;
    }
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieId, {
        savedMovies: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("Please Log in to save a movie");
      return;
    }
    console.log("Saved");
  };
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-full block"
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className=" absolute top-0 text-center left-0 w-full h-full hover:bg-black/60 hover:opacity-100 opacity-0 text-white">
        <p className=" font-bold text-md whitespace-normal md:text-xl flex place-content-center place-items-center h-full w-full ">
          {movie?.title}
        </p>
        <p onClick={saveMovie}>
          {like ? (
            <FaHeart className=" absolute top-4 left-4 text-gray-300 " />
          ) : (
            <FaRegHeart className=" absolute top-4 left-4 text-gray-300 " />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
