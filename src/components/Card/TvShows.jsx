import { IT, US, FR, ES, JP, GB, DE, CN, KR, RU } from 'country-flag-icons/react/3x2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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

                        <li><h4>Average Vote: </h4>
                            {tvShows.vote_average <= 2 ? <span className='rating-icon'><FontAwesomeIcon icon={faStar} /></span>
                                : tvShows.vote_average <= 4 ? <span className='rating-icon'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>
                                    : tvShows.vote_average <= 6 ? <span className='rating-icon'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /> </span>
                                        : tvShows.vote_average <= 8 ? <span className='rating-icon'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>
                                            : <span className='rating-icon'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>
                            }



                        </li>
                        <li><img src={`http://image.tmdb.org/t/p/w342/${tvShows.poster_path}`} alt="" /></li>
                        <hr />
                    </ul>
                </div>
            </div>
        </div>
    )
}