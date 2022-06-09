// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const HollyWoodMovie = 'HollyWood'

const PrimeVideo = props => {
  const {moviesList} = props
  const HollyWoodMoviesList = moviesList.filter(
    movie => movie.categoryId === HollyWoodMovie,
  )

  return (
    <div className="prime-video-container">
      <img
        className="image"
        src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_1028x578.v1582751026.png"
        alt="Movie World"
      />
      <div className="movies-container">
        <h1 className="movies-heading">HollyWood Movies </h1>
        <MoviesSlider moviesList={HollyWoodMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
