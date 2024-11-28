import MovieCard from "./Card/MovieCard";
import GlobalContext from "../contexts/GlobalContext";
import { useContext } from "react";


export default function AppMain() {
    const { data, error } = useContext(GlobalContext);
    console.log(data);




    if (error) {
        return <div>Errore: {error}</div>;
    }
    if (!data) {
        return <div>Caricamento in corso...</div>;
    }

    if (!data.length === 0) {
        return <div>Nessun film trovato</div>;
    }

    return (
        <>
            {
                data.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                )
                )
            }
        </>
    )
}