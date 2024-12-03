import MovieCard from "./Card/MovieCard";
import GlobalContext from "../contexts/GlobalContext";
import { useContext } from "react";
import TvShowsCard from "./Card/TvShows";







export default function AppMain() {
    const { movies, tvShows, error } = useContext(GlobalContext);





    if (error) {
        return <div>Errore: {error}</div>;
    }
    if (!movies && !tvShows) {
        return <div>Caricamento in corso...</div>;
    }






    return (
        <>
            <main>

                <div className="container">
                    <div className="row">

                        {movies &&



                            movies.map((movie) => (
                                <MovieCard key={movie.id} movies={movie} />

                            ))


                        }



                        {tvShows &&



                            tvShows.map((tvShow) => (

                                <TvShowsCard key={tvShow.id} tvShows={tvShow} />

                            ))


                        }

                    </div>
                </div>
            </main>

        </>
    )
}