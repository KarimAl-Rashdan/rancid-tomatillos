import React from "react"
import "./MovieContainer.css"
import Movie from "./Movie"
import NavBar from "./NavBar"

const MovieContainer = ({posters, showDetails}) => {
  // console.log("posters", posters)
  // console.log("showdetails", showDetails)
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
    <div>
      <NavBar />
      <div className="movieContainer">
        {moviePosters}
      </div>
    </div>
  )
}

export default MovieContainer