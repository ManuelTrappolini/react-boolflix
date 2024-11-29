import { IT, US, FR, ES, JP, GB, DE, CN, KR, RU } from 'country-flag-icons/react/3x2'

export default function MovieCard({ movies }) {
    console.log("MovieCard ricevuto:", movies);

    const languageFlag = {
        'it': IT,
        'en': US,
        'fr': FR,
        'es': ES,
        'ja': JP,
        'gb': GB,
        'de': DE,
        'cn': CN,
        'ko': KR,
        'ru': RU
    };


    const FlagIcon = languageFlag[movies?.original_language?.toLowerCase()] || US


    return (
        <div className="col" >

            <div className="card">
                <div className="card-body">
                    <ul>
                        <li><h4 >Movie Title:</h4> {movies?.title}</li>
                        <li><h4>Original Title:</h4> {movies?.original_title}</li>
                        <li><h4>Original Language:</h4> <FlagIcon className="movie-flag" /></li>
                        <li><h4>Average Vote: </h4> {movies?.vote_average}</li>
                        <li><img src={`http://image.tmdb.org/t/p/w300/${movies.poster_path}`} alt="" /></li>
                        <hr />
                    </ul>
                </div>
            </div>
        </div>
    )
}