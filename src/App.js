import React, { Component } from "react";
import "./App.css"
import movieData from "./movieData";
import NavBar from "./NavBar"
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
        <NavBar />
        <MovieContainer posters={this.state.posters}/>
      </main>
    )
  }
}

export default App