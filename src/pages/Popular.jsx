import React, { useState, useEffect, useRef, useContext } from 'react'
import { myListContext } from '../context/context';
import { TypeAnimation } from 'react-type-animation';
import { FaCaretUp } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import NowayHome from '/images/nowayhome.png'
import Spiderman from '/images/spiderman.png'
import Spiderman2 from '/images/spiderman2.png'
import Spiderman3 from '/images/spiderman3.png'
import IntotheVerse from '/images/intotheverse.png'
import AcrosstheVerse from '/images/acrosstheverse.png'
import TASM from '/images/tasm.png'
import TASM2 from '/images/tasm2.png'
import Homecoming from '/images/homecoming.png'
import FarFromHome from '/images/Farfromhome.png'

const Popular = () => {
  const [batman, setbatman] = useState([]);
  const [superman, setsuperman] = useState([]);
  const [deadpool, setdeadpool] = useState([]);
  const [avengers, setavengers] = useState([]);

  const { list, toggleMovie } = useContext(myListContext);

  const PopularRef = useRef();

  const popularSpiderman = [
    {
      "imdbID": 1,
      "Poster": NowayHome,
      "Type": 'movie',
      "Year": '2021',
      "Title": 'Spiderman : No Way Home'
    },
    {
      "imdbID": 2,
      "Poster": AcrosstheVerse,
      "Type": 'movie',
      "Year": '2023',
      "Title": 'Spiderman Across the Spider Verse'
    },
    {
      "imdbID": 3,
      "Poster": Spiderman3,
      "Type": 'movie',
      "Year": '2007',
      "Title": 'Spiderman 3'
    },
    {
      "imdbID": 4,
      "Poster": IntotheVerse,
      "Type": 'movie',
      "Year": '2018',
      "Title": 'Spiderman Into the Spider Verse'
    },
    {
      "imdbID": 5,
      "Poster": Homecoming,
      "Type": 'movie',
      "Year": '2017',
      "Title": 'Spiderman : Homecoming'
    },
    {
      "imdbID": 6,
      "Poster": FarFromHome,
      "Type": 'movie',
      "Year": '2019',
      "Title": 'Spiderman : Far From Home'
    },
    {
      "imdbID": 7,
      "Poster": TASM,
      "Type": 'movie',
      "Year": '2012',
      "Title": 'The Amazing Spiderman'
    },
    {
      "imdbID": 8,
      "Poster": TASM2,
      "Type": 'movie',
      "Year": '2014',
      "Title": 'The Amazing Spiderman 2'
    },
    {
      "imdbID": 9,
      "Poster": Spiderman2,
      "Type": 'movie',
      "Year": '2004',
      "Title": 'Spiderman 2'
    },
    {
      "imdbID": 10,
      "Poster": Spiderman,
      "Type": 'movie',
      "Year": '2002',
      "Title": 'Spiderman'
    },
  ]

  const fetchBatman = async () => {
    const allMovies = [];
    const totalPages = 7;

    for (let page = 1; page <= totalPages; page++) {
      const response = await fetch(`https://www.omdbapi.com/?apikey=e0355f9&s=Batman&page=${page}`);
      const data = await response.json();

      if (data.Response === "True") {
        allMovies.push(...data.Search);
      }

      const selectedIndices = [46, 2, 30, 21, 40, 9, 55];
      const filteredMovies = selectedIndices.map(index => allMovies[index]).filter(Boolean);

      setbatman(filteredMovies);
    }
  };

  const fetchSuperman = async (page) => {
    const allMovies = [];
    const totalPages = 7;

    for (page = 1; page <= totalPages; page++) {
      const Supermanmovies = await fetch(`https://www.omdbapi.com/?apikey=e0355f9&s=Superman&page=${page}`)
      const data = await Supermanmovies.json()
      if (data.Response === "True") {
        allMovies.push(...data.Search)
      }

      const selectedIndices = [0, 1, 4, 13, 27]
      const filteredMovies = selectedIndices.map(index => allMovies[index]).filter(Boolean);

      setsuperman(filteredMovies)
    }
  };

  const fetchDeadpool = async (page) => {
    const allMovies = [];
    const totalPages = 7;

    for (page = 1; page <= totalPages; page++) {
      const Deadpoolmovies = await fetch(`https://www.omdbapi.com/?apikey=e0355f9&s=Deadpool&page=${page}`)
      const data = await Deadpoolmovies.json()
      if (data.Response === "True") {
        allMovies.push(...data.Search)
      }

      const selectedIndices = [2, 0, 1, 3, 13]
      const filteredMovies = selectedIndices.map(index => allMovies[index]).filter(Boolean);

      setdeadpool(filteredMovies)
    }
  };

  const fetchAvengers = async (page) => {
    const allMovies = [];
    const totalPages = 2;

    for (page = 1; page <= totalPages; page++) {
      const Avengersmovies = await fetch(`https://www.omdbapi.com/?apikey=e0355f9&s=avengers&page=${page}`)
      const data = await Avengersmovies.json()
      if (data.Response === "True") {
        allMovies.push(...data.Search)
      }

      const selectedIndices = [1, 2, 0, 3, 9]
      const filteredMovies = selectedIndices.map(index => allMovies[index]).filter(Boolean);

      setavengers(filteredMovies)
    }
  }

  const scrollToTop = () => {
    PopularRef.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    fetchBatman();
    fetchSuperman();
    fetchDeadpool();
    fetchAvengers()
  }, []);

  return (
    <>
      <div ref={PopularRef} className='movies-container h-[90vh] overflow-y-scroll'>
        <h1 className='text-center py-10 font-bold text-lg sm:text-xl flex flex-col gap-2'><TypeAnimation
          sequence={[
            'Browse Popular Movies, Games & Series from each Genre',
            1000,
          ]}
          wrapper="span"
          speed={70}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
        /></h1>

        <div className="batman my-8 mx-1 sm:mx-8">
          <h2 className='sm:text-xl font-bold cursor-default mx-3 sm:mx-0 my-3'>Popular in Batman</h2>

          <div className="popular-movies flex items-center overflow-x-scroll pb-4 md:overflow-hidden md:grid md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 py-3">
            {batman.map((b) => (
              <div key={b.imdbID} className="movie h-auto min-w-[250px] md:w-[250px] flex flex-col items-baseline gap-3">
                <img className='hover:scale-105 transition-all duration-300 ease-in' src={b.Poster} alt={`${b.Title} Poster`} />
                <div className="flex items-center gap-3 text-sm">
                  <button onClick={() => toggleMovie(b)}
                    className="h-10 w-10 flex items-center justify-center cursor-pointer text-white rounded-full text-sm">
                    {list.some((m) => m.imdbID === b.imdbID) ? <FaRegHeart className='text-pink-600 scale-125'/> : <FaRegHeart />}
                  </button>
                  <h4 className='text-sm opacity-60'>{b.Year}</h4>
                  <p className='text-xs opacity-60 uppercase pl-4'>{b.Type}</p>
                </div>
                <h2>{b.Title}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="superman mx-1 sm:mx-8 my-12">
          <h2 className='sm:text-xl font-bold cursor-default mx-3 sm:mx-0 my-3'>Popular in Superman</h2>

          <div className="popular-movies flex items-center overflow-x-scroll pb-4 md:overflow-hidden md:grid md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 py-3">
            {superman.map((s) => (
              <div key={s.imdbID} className="movie h-auto min-w-[250px] md:w-[250px] flex flex-col items-baseline gap-3">
                <img className='hover:scale-105 transition-all duration-300 ease-in' src={s.Poster} alt={`${s.Title} Poster`} />
                <div className="flex items-center gap-3 text-sm">
                <button onClick={() => toggleMovie(s)}
                    className="h-10 w-10 flex items-center justify-center cursor-pointer text-white rounded-full text-sm">
                    {list.some((m) => m.imdbID === s.imdbID) ? <FaRegHeart className='text-pink-600 scale-125'/> : <FaRegHeart />}
                  </button>
                  <h4 className='text-sm opacity-60'>{s.Year}</h4>
                  <p className='text-xs opacity-60 uppercase pl-4'>{s.Type}</p>
                </div>
                <h2>{s.Title}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="batman my-8 mx-1 sm:mx-8">
          <h2 className='sm:text-xl font-bold cursor-default mx-3 sm:mx-0 my-3'>Popular in Spiderman</h2>

          <div className="popular-movies flex items-center overflow-x-scroll pb-4 md:overflow-hidden md:grid md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 py-3">
            {popularSpiderman.map((sp) => (
              <div key={sp.id} className="movie h-auto min-w-[250px] md:w-[250px] flex flex-col items-baseline gap-3">
                <img className='hover:scale-105 transition-all duration-300 ease-in' src={sp.Poster} alt={`${sp.Title} Poster`} />
                <div className="flex items-center gap-3 text-sm">
                <button onClick={() => toggleMovie(sp)}
                    className="h-10 w-10 flex items-center justify-center cursor-pointer text-white rounded-full text-sm">
                    {list.some((m) => m.imdbID === sp.imdbID) ? <FaRegHeart className='text-pink-600 scale-125'/> : <FaRegHeart />}
                  </button>
                  <h4 className='text-sm opacity-60'>{sp.Year}</h4>
                  <p className='text-sm opacity-60 uppercase pl-4'>{sp.Type}</p>
                </div>
                <h2>{sp.Title}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="deadpool mx-1 sm:mx-8 my-12">
          <h2 className='sm:text-xl font-bold cursor-default mx-3 sm:mx-0 my-3'>Popular in Deadpool</h2>

          <div className="popular-movies flex items-center overflow-x-scroll pb-4 md:overflow-hidden md:grid md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 py-3">
            {deadpool.map((d) => (
              <div key={d.imdbID} className="movie h-auto min-w-[250px] md:w-[250px] flex flex-col items-baseline gap-3">
                <img className='hover:scale-105 transition-all duration-300 ease-in' src={d.Poster} alt={`${d.Title} Poster`} />
                <div className="flex items-center gap-3 text-sm">
                <button onClick={() => toggleMovie(d)}
                    className="h-10 w-10 flex items-center justify-center cursor-pointer text-white rounded-full text-sm">
                    {list.some((m) => m.imdbID === d.imdbID) ? <FaRegHeart className='text-pink-600 scale-125'/> : <FaRegHeart />}
                  </button>
                  <h4 className='text-sm opacity-60'>{d.Year}</h4>
                  <p className='text-sm opacity-60 uppercase pl-4'>{d.Type}</p>
                </div>
                <h2>{d.Title}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="avengers mx-1 sm:mx-8 my-12">
          <h2 className='sm:text-xl font-bold cursor-default mx-3 sm:mx-0 my-3'>Popular in Avengers</h2>

          <div className="popular-movies flex items-center overflow-x-scroll pb-4 md:overflow-hidden md:grid md:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 py-3">
            {avengers.map((a) => (
              <div key={a.imdbID} className="movie h-auto min-w-[250px] md:w-[250px] flex flex-col items-baseline gap-3">
                <img className='hover:scale-105 transition-all duration-300 ease-in' src={a.Poster} alt={`${a.Title} Poster`} />
                <div className="flex items-center gap-3 text-sm">
                <button onClick={() => toggleMovie(a)}
                    className="h-10 w-10 flex items-center justify-center cursor-pointer text-white rounded-full text-sm">
                    {list.some((m) => m.imdbID === a.imdbID) ? <FaRegHeart className='text-pink-600 scale-125'/> : <FaRegHeart />}
                  </button>
                  <h4 className='text-sm opacity-60'>{a.Year}</h4>
                  <p className='text-sm opacity-60 uppercase pl-4'>{a.Type}</p>
                </div>
                <h2>{a.Title}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="to-top mt-4 mb-3 mx-3 flex justify-end items-end">
          <button onClick={scrollToTop} className='h-20 w-20 rounded-full text-xs flex flex-col items-center justify-center cursor-pointer bg-slate-700 hover:bg-slate-800 transition-all duration-300'><FaCaretUp className='animate-bounce' style={{ fontSize: '18px' }} /><span>Back to Top</span></button>
        </div>
      </div>

    </>
  )
}

export default Popular
