

export default function MovieCard({ movie }) {


    return (
        <div className="col" >

            <div className="card">
                <div className="card-body">
                    <ul>
                        <li><h5>{movie.title}</h5></li>
                        <li><h5>{movie.original_title}</h5></li>
                        <li><h5>{movie.original_language}</h5></li>
                        <li><h5>{movie.vote_average}</h5></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}