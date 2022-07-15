import React from "react";
import axios from "axios";
import Movie from "../movie/Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchUrl, rowId }) => {
  const [movies, setMovies] = React.useState([]);
  React.useState(() => {
    axios.get(fetchUrl).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchUrl]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-slate-50 md:text-4xl font-sans p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className=" bg-white left-4 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:flex "
          size={40}
        />
        <div
          className="w-full h-full overflow-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
          id={"slider" + rowId}
        >
          {movies.map((movie, id) => (
            <Movie movie={movie} key={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className=" bg-white right-4 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:flex "
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
