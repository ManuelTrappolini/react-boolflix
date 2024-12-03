import { IT, US, FR, ES, JP, GB, DE, CN, KR, RU } from 'country-flag-icons/react/3x2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


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

        <>

            <div className="card col-3 col-6-sm col-6-md col-3-lg">
                <a href=""><img className='img-cover' src={movies.poster_path ? `http://image.tmdb.org/t/p/w342/${movies.poster_path}` : '/images/not-found.jpeg'} alt="" ></img>

                    <div className='wrapper'>
                        <h4>{movies?.title}</h4>
                        <h4>Original Title: {movies?.original_title}</h4>
                        <h4>Original Language: <FlagIcon className="movie-flag" /></h4>
                        <h4>{movies.vote_average <= 2 ? <span className='rating-icon'><FontAwesomeIcon icon={faStar} /></span>
                            : movies.vote_average <= 4 ? <span className='rating-icon'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>
                                : movies.vote_average <= 6 ? <span className='rating-icon'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /> </span>
                                    : movies.vote_average <= 8 ? <span className='rating-icon'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>
                                        : <span className='rating-icon'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>
                        }
                        </h4>
                        <h4>{movies?.overview}</h4>

                    </div>
                </a>
            </div>
        </>

    )
}