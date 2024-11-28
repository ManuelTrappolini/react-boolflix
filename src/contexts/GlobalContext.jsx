import { createContext } from 'react';
import { useState, useEffect } from 'react';


const GlobalContext = createContext()

const GLobalProvider = ({ children }) = {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);



    useEffect(() => {

    fetchData();
}, []);


const fetchData = () => {

    const url = 'https://api.themoviedb.org/3/search/movie?api_key=6f0cdd6a45dff3ebeb56b9a2e1bff564&query=ritorno+al+futuro';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore nella chiamata API');
            }
            return response.json();
        })
        .then(result => {
            setData(result.results);
        })
        .catch(err => {
            setError(err.message);
        })

}


return (

    <GlobalContext.Provider value={{ data, error }}>

        {children}

    </GlobalContext.Provider>
)

}



export default { GlobalContext, GLobalProvider }