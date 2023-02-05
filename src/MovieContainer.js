import React from "react"
import "./MovieContainer.css"
import Movie from "./Movie"

const MovieContainer = ({posters, showDetails}) => {
  const moviePosters = posters.map(poster => {
    return (
      <Movie 
        image={poster.poster_path}
        title={poster.title}
        rating={poster.average_rating}
        id={poster.id}
        key={poster.id}
        showDetails={showDetails}
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