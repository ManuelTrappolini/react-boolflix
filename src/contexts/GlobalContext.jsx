import { createContext } from 'react';
import { useState, useEffect } from 'react';


const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('')


    useEffect(() => {

        fetchData();
    }, []);


    const fetchData = (query = '') => {

        const url = query
            ? `https://api.themoviedb.org/3/search/movie?api_key=6f0cdd6a45dff3ebeb56b9a2e1bff564&query=${query}`
            : 'https://api.themoviedb.org/3/search/movie?api_key=6f0cdd6a45dff3ebeb56b9a2e1bff564&query=""';
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
        fetchData(query);
    }

    return (

        <GlobalContext.Provider value={{ data, error, searchQuery, updateSearchQuery }}>

            {children}

        </GlobalContext.Provider>
    )

}



export { GlobalProvider };
export default GlobalContext;