import React from "react"
import star from "./star-rating.jpg"
import "./Movie.css"

const Movie = ({image, title, rating}) => {
  return (
    <div className="movie">
      <img src={image} alt="Movie Poster"/>
      <h3>{title}</h3>
      <span className="label">
        <img src={star} alt="Star Rating" className="star"/>
        <p>{rating.toFixed(1)}</p>
      </span>
    </div>
  )
}

export default Movie