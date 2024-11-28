import { IT, US, FR, ES, JP, GB, DE, CN, KR, RU } from 'country-flag-icons/react/3x2'

export default function MovieCard({ movie }) {

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


    const FlagIcon = languageFlag[movie.original_language.toLowerCase()]


    return (
        <div className="col" >

            <div className="card">
                <div className="card-body">
                    <ul>
                        <li><h4 >Movie Title:</h4> {movie.title}</li>
                        <li><h4>Original Title:</h4> {movie.original_title}</li>
                        <li><h4>Original Language:</h4> <FlagIcon className="movie-flag" /></li>
                        <li><h4>Average Vote: </h4> {movie.vote_average}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}