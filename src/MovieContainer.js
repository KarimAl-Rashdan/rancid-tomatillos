import React from "react"
import "./MovieContainer.css"
import Movie from "./Movie"

const MovieContainer = ({posters}) => {
  const moviePosters = posters.map(poster => {
    return (
      <Movie 
        image={poster.poster_path}
        title={poster.title}
        rating={poster.average_rating}
        id={poster.id}
        key={poster.id}
      />
    )
  })
  return (
    <div className="movieContainer">
      {moviePosters}
    </div>
  )
}

export default MovieContainer