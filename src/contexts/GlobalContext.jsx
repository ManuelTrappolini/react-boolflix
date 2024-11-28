import { createContext } from 'react';
import { useState, useEffect } from 'react';


const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('')


    useEffect(() => {

        fetchMovies();
    }, []);


    const fetchMovies = (query = '') => {

        const url = query
            ? `https://api.themoviedb.org/3/search/movie?api_key=6f0cdd6a45dff3ebeb56b9a2e1bff564&query=${query}`
            : 'https://api.themoviedb.org/3/search/movie?api_key=6f0cdd6a45dff3ebeb56b9a2e1bff564';
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Errore nella chiamata API');
                }
                return response.json();
            })
            .then(result => {
                console.log('risultato:', result.results);

                setData(result.results);
            })
            .catch(err => {
                setError(err.message);
            })

    }
    const fetchTvShows = (query = '') => {

        const url = query
            ? `https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&query=${query}`
            : 'https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d';
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Errore nella chiamata API');
                }
                return response.json();
            })
            .then(result => {
                console.log('risultato:', result.results);

                setData(result.results);
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

        <GlobalContext.Provider value={{ data, error, searchQuery, updateSearchQuery }}>

            {children}

        </GlobalContext.Provider>
    )

}



export { GlobalProvider };
export default GlobalContext;