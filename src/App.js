import React, { Component } from "react";
import "./App.css"
import movieData from "./movieData";
// import MainPage from "./Components/MainPage/MainPage"
// import DetailsPage from "./DetailsPage"
import MovieContainer from "./MovieContainer";

class App extends Component {
  constructor() {
    super()
    this.state = {
      posters: movieData.movies
    }
  }
  render() {
    return (
      <main>
        <MovieContainer posters={this.state.posters}/>
      </main>
    )
  }
}

export default App