import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase.config";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const [movies, setMovies] = React.useState([]);
  const { user } = UserAuth();
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedId) => {
    try {
      const remainingMovies = movies.filter((movie) => movie.id !== passedId);
      await updateDoc(movieRef, {
        savedMovies: remainingMovies,
      });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc?.data()?.savedMovies);
    });
  }, [user?.email]);
  return (
    <div>
      {/* <h2 className="text-slate-50 md:text-4xl font-sans p-4">My Shows</h2> */}
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className=" bg-white left-4 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:flex text-black"
          size={40}
        />
        <div
          className="w-full h-full overflow-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
          id={"slider"}
        >
          {movies?.map((movie, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full h-full block"
                src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                alt={movie?.title}
              />
              <div className=" absolute top-0 text-center left-0 w-full h-full hover:bg-black/60 hover:opacity-100 opacity-0 text-white">
                <p className=" font-bold text-xs whitespace-normal md:text-sm flex place-content-center place-items-center h-full w-full ">
                  {movie?.title}
                </p>
                <p
                  onClick={() => deleteShow(movie.id)}
                  className="absolute text-gray-300 top-4 right-4 font-bold text-md"
                >
                  <AiOutlineClose className="text-2xl" />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className=" bg-white right-4 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:flex text-black"
          size={40}
        />
      </div>
    </div>
  );
};

export default SavedShows;
