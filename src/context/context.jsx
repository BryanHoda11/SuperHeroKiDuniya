import { createContext, useState, useEffect } from "react";

export const myListContext = createContext([]);

export const MyListProvider = ({ children }) => {
    const [list, setList] = useState([]);
    const [Moviescount, setMoviescount] = useState(0);

    useEffect(()=> {
        const savedCount = localStorage.getItem('moviesCount');
        
        if(savedCount) {
            setMoviescount(savedCount);
        }
    }, [])

    const toggleMovie = (movie) => {
        let updatedList;

        if (list.some((m) => m.imdbID === movie.imdbID)) {
            updatedList = list.filter((m) => m.imdbID !== movie.imdbID);
            setMoviescount(updatedList.length);
        } else {
            updatedList = [...list, movie];
            setMoviescount(updatedList.length);
        }
        setList(updatedList);

        localStorage.setItem('moviesList', JSON.stringify(updatedList));
        localStorage.setItem('moviesCount', updatedList.length);
    }

    return (
        <myListContext.Provider value={{ list, setList, toggleMovie, Moviescount }}>
            {children}
        </myListContext.Provider>
    );
}