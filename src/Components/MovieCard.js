import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({ movie }) => (

    <div className='image-container movie'>
        <img style={{ width: 300, height: 350, marginTop: 20 }} src={movie.posterURL} alt='movie'></img>
        <div className='movie-desc'>

            <span style={{ color: '#8B0000', fontSize: 25, marginRight: 20 }}>{movie.title}</span>
            <StarRatingComponent
                starCount={7}
                value={movie.rate}
            />
            <span className='description' style={{ margin: 100, marginTop: 20, marginBottom: 20 }}>{movie.description}</span>

        </div>
    </div>
)

export default MovieCard;