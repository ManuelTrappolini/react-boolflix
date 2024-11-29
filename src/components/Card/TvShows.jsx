import { IT, US, FR, ES, JP, GB, DE, CN, KR, RU } from 'country-flag-icons/react/3x2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

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


        <div className="card col-4">
            <a href=""><img className='img-cover' src={tvShows.poster_path ? `http://image.tmdb.org/t/p/w342/${tvShows.poster_path}` : '/images/not-found.jpeg'} alt="" ></img>

                <div className='wrapper'>
                    <h4>TvShows Title: {tvShows.name}</h4>
                    <h4>Original Title: {tvShows.original_name}</h4>
                    <h4>Original Language: <FlagIcon className="movie-flag" /></h4>

                    <h4>Average Vote:
                        {tvShows.vote_average <= 2 ? <span className='rating-icon'><FontAwesomeIcon icon={faStar} /></span>
                            : tvShows.vote_average <= 4 ? <span className='rating-icon'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>
                                : tvShows.vote_average <= 6 ? <span className='rating-icon'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /> </span>
                                    : tvShows.vote_average <= 8 ? <span className='rating-icon'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>
                                        : <span className='rating-icon'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>
                        }
                    </h4>
                    <h4>Content:  {tvShows?.overview}</h4>
                </div>
            </a>
        </div >


    )
}