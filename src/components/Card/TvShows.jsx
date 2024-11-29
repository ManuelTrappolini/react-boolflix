import { IT, US, FR, ES, JP, GB, DE, CN, KR, RU } from 'country-flag-icons/react/3x2'

export default function TvShowsCard({ tvShows }) {

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


    const FlagIcon = languageFlag[tvShows.original_language.toLowerCase()] || US


    return (
        <div className="col" >

            <div className="card">
                <div className="card-body">
                    <ul>
                        <li><h4 >TvShows Title:</h4> {tvShows.name}</li>
                        <li><h4>Original Title:</h4> {tvShows.original_name}</li>
                        <li><h4>Original Language:</h4> <FlagIcon className="movie-flag" /></li>
                        <li><h4>Average Vote: </h4> {tvShows.vote_average}</li>
                        <li><img src={`http://image.tmdb.org/t/p/w300/${tvShows.poster_path}`} alt="" /></li>
                        <hr />
                    </ul>
                </div>
            </div>
        </div>
    )
}