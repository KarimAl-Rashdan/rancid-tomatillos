import React from "react"
import "./MovieContainer.css"
import Movie from "../Movie/Movie"
import { Link } from "react-router-dom"

const MovieContainer = ({posters, showDetails}) => {
  const moviePosters = posters.map(poster => {
    return (
      <div className="movieContainer">
        <Link to={`/${poster.id}`}>
          <Movie 
            image={poster.poster_path}
            title={poster.title}
            rating={poster.average_rating}
            id={poster.id}
            key={poster.id}
            showDetails={showDetails}
          />
        </Link>
      </div>
    )
  })
  return (
    <div>
      <div className="movieContainer">
        {moviePosters}
      </div>
    </div>
  )
}

export default MovieContainer