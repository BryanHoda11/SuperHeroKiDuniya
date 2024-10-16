import React, { useEffect, useContext } from "react";
import { myListContext } from "../context/context";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const List = () => {
  const { list, setList, toggleMovie, Moviescount } = useContext(myListContext);

  useEffect(() => {
    const savedMovies = localStorage.getItem('moviesList');
    const savedList = savedMovies ? JSON.parse(savedMovies) : [];
    setList(savedList);
  }, [setList]);

  return (
    <>
      {list.length > 0 ? (
        <div>
          <h1 className='px-8 text-center sm:text-start text-slate-500 text-3xl font-bold opacity-60 my-7'>Total : {Moviescount}</h1>
          <ul className="flex flex-col items-cent justify-center my-10">
            {list.map((movie) => (
              <li key={movie.imdbID} className="movie flex flex-col sm:flex-row items-center justify-between w-[95%] sm:w-[85%] bg-slate-800 rounded-lg px-7 py-7 mx-auto relative">
                <img className="h-auto w-[200px]" src={movie.Poster} alt={`${movie.Title} Poster`} />
                <div className="flex flex-col items-center gap-4 mt-5 sm:mt-0">
                  <div className="flex items-center gap-3">
                    <h4 className='text-sm opacity-60'>{movie.Year}</h4>
                    <p className='text-xs opacity-60 uppercase pl-4'>{movie.Type}</p>
                  </div>
                  <button
                    onClick={() => toggleMovie(movie)}
                    className="bg-transparent absolute top-6 right-5"> <FaTimes /> </button>
                  <h2>{movie.Title}</h2>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6">
          <h1 className='text-center text-slate-500 text-2xl sm:text-5xl font-bold opacity-40 mt-20 animate-pulse'>No Movies saved yet!</h1>
          <div className="buttons flex items-center justify-center gap-4 mt-4">
            <Link to='/'><button className="block px-4 py-2 hover:font-bold cursor-pointer bg-slate-800 text-white rounded-lg text-sm">Browse Movies</button></Link>
            <Link to='/popular'><button className="block px-4 py-2 hover:font-bold cursor-pointer bg-slate-800 text-white rounded-lg text-sm">See Most Popular</button></Link>
          </div>
        </div>
      )}
    </>
  )
}

export default List
