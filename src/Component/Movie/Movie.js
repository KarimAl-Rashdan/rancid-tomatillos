import React from "react"
import star from "../../star-rating.jpg"
import "./Movie.css"

const Movie = ({image, title, rating, id, showDetails}) => {
  return (
    <div className="movie">
      <button onClick={() => showDetails(id)}><img className="movieImage" src={image} alt="Movie Poster"/></button>
      <div className="titleRating">
        <h3 className="movieTitle">{title}</h3>
        <span className="label">
          <img src={star} alt="Star Rating" className="star"/>
          <p className="rating">{rating.toFixed(1)}</p>
        </span>
      </div>
    </div>
  )
}

export default Movie