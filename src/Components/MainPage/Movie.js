import React from "react"
import star from "./star-rating.jpg"
import "./Components/MainPage/Movie.css"

const Movie = ({image, title, rating}) => {
  return (
    <div className="movie">
      <img src={image} alt="Movie Poster"/>
      <h3>{title}</h3>
      <img src={star} alt="Star Rating"/>
      <p>{rating.toFixed(1)}</p>
    </div>
  )
}

export default Movie