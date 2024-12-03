import { createContext } from 'react';
import { useState, useEffect } from 'react';


const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([])
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('')

    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY


    useEffect(() => {

        fetchMovies();
        fetchTvShows();
    }, []);


    const fetchMovies = (query = '') => {

        const url = query
            ? `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`
            : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Errore nella chiamata API');
                }
                return response.json();
            })
            .then(result => {

                setMovies(result.results);
            })
            .catch(err => {
                setError(err.message);
            })

    }
    const fetchTvShows = (query = '') => {

        const url = query
            ? `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${query}`
            : `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&sort_by=popularity.desc`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Errore nella chiamata API');
                }
                return response.json();
            })
            .then(result => {


                setTvShows(result.results);
            })
            .catch(err => {
                setError(err.message);
            })

    }




    const updateSearchQuery = (query) => {
        setSearchQuery(query);
        fetchMovies(query);
        fetchTvShows(query)
    }

    return (

        <GlobalContext.Provider value={{ movies, tvShows, error, searchQuery, updateSearchQuery }}>

            {children}

        </GlobalContext.Provider>
    )

}



export { GlobalProvider };
export default GlobalContext;