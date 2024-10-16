import { useState, useEffect, useRef, useContext } from 'react'
import { myListContext } from '../context/context';
import { TypeAnimation } from 'react-type-animation';
import { FaCaretUp } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [batman, setbatman] = useState([]);
    const [superman, setsuperman] = useState([]);
    const [spiderman, setspiderman] = useState([]);
    const [loki, setloki] = useState([]);
    const [deadpool, setdeadpool] = useState([]);
    const [avengers, setavengers] = useState([]);

    const { list, toggleMovie } = useContext(myListContext);

    const Moviesref = useRef()

    // Fetching data from each API
    const fetchBatman = async (page) => {
        const Batmanmovies = await fetch(`https://www.omdbapi.com/?apikey=e0355f9&s=Batman&page=${page}`)
        const data = await Batmanmovies.json();
        if (data.Response === "True") {
            setbatman((prevMovies) => [...prevMovies, ...data.Search]);
        }
    }

    const fetchSuperman = async (page) => {
        const Supermanmovies = await fetch(`https://www.omdbapi.com/?apikey=e0355f9&s=Superman&page=${page}`)
        const data = await Supermanmovies.json()
        if (data.Response === "True") {
            setsuperman((prevMovies) => [...prevMovies, ...data.Search]);
        }
    }

    const fetchSpiderman = async (page) => {
        const Spidermanmovies = await fetch(`https://www.omdbapi.com/?apikey=e0355f9&s=spiderman&page=${page}`)
        const data = await Spidermanmovies.json()
        if (data.Response === "True") {
            setspiderman((prevMovies) => [...prevMovies, ...data.Search]);
        }
    }

    const fetchLoki = async (page) => {
        const Lokimovies = await fetch(`https://www.omdbapi.com/?apikey=e0355f9&s=loki&page=${page}`)
        const data = await Lokimovies.json()
        if (data.Response === "True") {
            setloki((prevMovies) => [...prevMovies, ...data.Search]);
        }
    }

    const fetchDeadpool = async (page) => {
        const Deadpoolmovies = await fetch(`https://www.omdbapi.com/?apikey=e0355f9&s=deadpool&page=${page}`)
        const data = await Deadpoolmovies.json()
        if (data.Response === "True") {
            setdeadpool((prevMovies) => [...prevMovies, ...data.Search]);
        }
    }

    const fetchAvengers = async (page) => {
        const Avengersmovies = await fetch(`https://www.omdbapi.com/?apikey=e0355f9&s=avengers&page=${page}`)
        const data = await Avengersmovies.json()
        if (data.Response === "True") {
            setavengers((prevMovies) => [...prevMovies, ...data.Search]);
        }
    }

    // Click Event Functions
    const loadBatmanMovies = () => {
        setCurrentPage(() => currentPage + 1);
    };

    const loadSupermanMovies = () => {
        setCurrentPage(() => currentPage + 1);
    }

    const loadSpidermanMovies = () => {
        setCurrentPage(() => currentPage + 1);
    }

    const loadLokiMovies = () => {
        setCurrentPage(() => currentPage + 1);
    }

    const loadDeadpoolMovies = () => {
        setCurrentPage(() => currentPage + 1);
    }

    const loadAvengersMovies = () => {
        setCurrentPage(() => currentPage + 1);
    }

    const scrollToTop = () => {
        Moviesref.current.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    // useEffect Functions
    useEffect(() => {
        const fetchAllMovies = async () => {
            await fetchBatman(currentPage);
            await fetchSuperman(currentPage);
            await fetchSpiderman(currentPage);
            await fetchLoki(currentPage);
            await fetchDeadpool(currentPage);
            await fetchAvengers(currentPage)
        };

        fetchAllMovies();
    }, [currentPage]);

    return (
        <>
            <div ref={Moviesref} className='movies-container overflow-y-scroll h-[90vh] bg-slate-900 text-white'>
                <h1 className='text-center py-10 font-bold text-lg sm:text-xl flex flex-col gap-2'><TypeAnimation
                    sequence={[
                        'Browse movies of your favourite Superhero, all in one place!',
                        1000,
                    ]}
                    wrapper="span"
                    speed={70}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                /></h1>

                <div className="batman my-8 mx-1 sm:mx-8">
                    <div className="batman-header flex items-center justify-between mx-3 sm:mx-0">
                        <h2 className='sm:text-xl font-bold cursor-default'>Batman</h2>
                        <button onClick={loadBatmanMovies} className="mt-4 hidden sm:block px-4 py-2 cursor-pointer bg-gradient-to-b from-slate-700 to to-slate-800 text-white rounded-lg text-sm">Load More Movies</button>
                        <button onClick={loadBatmanMovies} className="mt-4 px-4 py-2 flex sm:hidden items-center justify-center cursor-pointer bg-gradient-to-b from-slate-700 to to-slate-800 text-white rounded-lg text-sm"><GoPlus /></button>
                    </div>
                    <div className="movies flex items-baseline gap-6 overflow-x-scroll py-3">
                        {batman.map((b) => (
                            <div key={b.imdbID} className="movie h-auto min-w-[200px] flex flex-col items-baseline gap-3">
                                <img src={b.Poster} alt={`${b.Title} Poster`} />
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => toggleMovie(b)}
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
                    <div className="superman-header flex items-center justify-between mx-3 sm:mx-0">
                        <h2 className='sm:text-xl font-bold cursor-default'>Superman</h2>
                        <button onClick={loadSupermanMovies} className="mt-4 hidden sm:block px-4 py-2 cursor-pointer bg-gradient-to-b from-slate-700 to to-slate-800 text-white rounded-lg">Load More Movies</button>
                        <button onClick={loadSupermanMovies} className="mt-4 px-4 py-2 flex sm:hidden items-center justify-center cursor-pointer bg-gradient-to-b from-slate-700 to to-slate-800 text-white rounded-lg text-sm"><GoPlus /></button>
                    </div>
                    <div className="movies flex items-baseline gap-6 overflow-x-scroll py-3">
                        {superman.map((s) => (
                            <div key={s.imdbID} className="movie h-auto min-w-[200px] flex flex-col items-baseline gap-3">
                                <img src={s.Poster} alt={`${s.Title} Poster`} />
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => toggleMovie(s)}
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

                <div className="spiderman mx-1 sm:mx-8 my-12">
                    <div className="spiderman-header flex items-center justify-between mx-3 sm:mx-0">
                        <h2 className='sm:text-xl font-bold cursor-default'>Spiderman</h2>
                        <button onClick={loadSpidermanMovies} className="mt-4 hidden sm:block px-4 py-2 cursor-pointer bg-gradient-to-b from-slate-700 to to-slate-800 text-white rounded-lg">Load More Movies</button>
                        <button onClick={loadSpidermanMovies} className="mt-4 px-4 py-2 flex sm:hidden items-center justify-center cursor-pointer bg-gradient-to-b from-slate-700 to to-slate-800 text-white rounded-lg text-sm"><GoPlus /></button>
                    </div>
                    <div className="movies flex items-baseline gap-6 overflow-x-scroll py-3">
                        {spiderman.map((sp) => (
                            <div key={sp.imdbID} className="movie h-auto min-w-[200px] flex flex-col items-baseline gap-3">
                                <img src={sp.Poster} alt={`${sp.Title} Poster`} />
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => toggleMovie(sp)}
                                        className="h-10 w-10 flex items-center justify-center cursor-pointer text-white rounded-full text-sm">
                                        {list.some((m) => m.imdbID === sp.imdbID) ? <FaRegHeart className='text-pink-600 scale-125'/> : <FaRegHeart />}
                                    </button>
                                    <h4 className='text-sm opacity-60'>{sp.Year}</h4>
                                    <p className='text-xs opacity-60 uppercase pl-4'>{sp.Type}</p>
                                </div>
                                <h2>{sp.Title}</h2>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="loki mx-1 sm:mx-8 my-12">
                    <div className="loki-header flex items-center justify-between mx-3 sm:mx-0">
                        <h2 className='sm:text-xl font-bold cursor-default'>Loki</h2>
                        <button onClick={loadLokiMovies} className="mt-4 hidden sm:block px-4 py-2 cursor-pointer bg-gradient-to-b from-slate-700 to to-slate-800 text-white rounded-lg">Load More Movies</button>
                        <button onClick={loadLokiMovies} className="mt-4 px-4 py-2 flex sm:hidden items-center justify-center cursor-pointer bg-gradient-to-b from-slate-700 to to-slate-800 text-white rounded-lg text-sm"><GoPlus /></button>
                    </div>
                    <div className="movies flex items-baseline gap-6 overflow-x-scroll py-3">
                        {loki.map((l) => (
                            <div key={l.imdbID} className="movie h-auto min-w-[200px] flex flex-col items-baseline gap-3">
                                <img src={l.Poster} alt={`${l.Title} Poster`} />
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => toggleMovie(l)}
                                        className="h-10 w-10 flex items-center justify-center cursor-pointer text-white rounded-full text-sm">
                                        {list.some((m) => m.imdbID === l.imdbID) ? <FaRegHeart className='text-pink-600 scale-125'/> : <FaRegHeart />}
                                    </button>
                                    <h4 className='text-sm opacity-60'>{l.Year}</h4>
                                    <p className='text-xs opacity-60 uppercase pl-4'>{l.Type}</p>
                                </div>
                                <h2>{l.Title}</h2>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="deadpool mx-1 sm:mx-8 my-12">
                    <div className="deadpool-header flex items-center justify-between mx-3 sm:mx-0">
                        <h2 className='sm:text-xl font-bold cursor-default'>Deadpool</h2>
                        <button onClick={loadDeadpoolMovies} className="mt-4 hidden sm:block px-4 py-2 cursor-pointer bg-gradient-to-b from-slate-700 to to-slate-800 text-white rounded-lg">Load More Movies</button>
                        <button onClick={loadDeadpoolMovies} className="mt-4 px-4 py-2 flex sm:hidden items-center justify-center cursor-pointer bg-gradient-to-b from-slate-700 to to-slate-800 text-white rounded-lg text-sm"><GoPlus /></button>
                    </div>
                    <div className="movies flex items-baseline gap-6 overflow-x-scroll py-3">
                        {deadpool.map((d) => (
                            <div key={d.imdbID} className="movie h-auto min-w-[200px] flex flex-col items-baseline gap-3">
                                <img src={d.Poster} alt={`${d.Title} Poster`} />
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => toggleMovie(d)}
                                        className="h-10 w-10 flex items-center justify-center cursor-pointer text-white rounded-full text-sm">
                                        {list.some((m) => m.imdbID === d.imdbID) ? <FaRegHeart className='text-pink-600 scale-125'/> : <FaRegHeart />}
                                    </button>
                                    <h4 className='text-sm opacity-60'>{d.Year}</h4>
                                    <p className='text-xs opacity-60 uppercase pl-4'>{d.Type}</p>
                                </div>
                                <h2>{d.Title}</h2>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="avengers mx-1 sm:mx-8 my-12">
                    <div className="avengers-header flex items-center justify-between mx-3 sm:mx-0">
                        <h2 className='sm:text-xl font-bold cursor-default'>Avengers</h2>
                        <button onClick={loadAvengersMovies} className="mt-4 hidden sm:block px-4 py-2 cursor-pointer bg-gradient-to-b from-slate-700 to to-slate-800 text-white rounded-lg">Load More Movies</button>
                        <button onClick={loadAvengersMovies} className="mt-4 px-4 py-2 flex sm:hidden items-center justify-center cursor-pointer bg-gradient-to-b from-slate-700 to to-slate-800 text-white rounded-lg text-sm"><GoPlus /></button>
                    </div>
                    <div className="movies flex items-baseline gap-6 overflow-x-scroll py-3">
                        {avengers.map((a) => (
                            <div key={a.imdbID} className="movie h-auto min-w-[200px] flex flex-col items-baseline gap-3">
                                <img src={a.Poster} alt={`${a.Title} Poster`} />
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => toggleMovie(a)}
                                        className="h-10 w-10 flex items-center justify-center cursor-pointer text-white rounded-full text-sm">
                                        {list.some((m) => m.imdbID === a.imdbID) ? <FaRegHeart className='text-pink-600 scale-125'/> : <FaRegHeart />}
                                    </button>
                                    <h4 className='text-sm opacity-60'>{a.Year}</h4>
                                    <p className='text-xs opacity-60 uppercase pl-4'>{a.Type}</p>
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

export default Home
