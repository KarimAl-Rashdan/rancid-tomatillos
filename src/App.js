import React, { Component } from "react";
import "./App.css"
import movieData from "./movieData";
import NavBar from "./NavBar"
// import MainPage from "./Components/MainPage/MainPage"
import DetailsPage from "./DetailsPage"
import MovieContainer from "./MovieContainer";

class App extends Component {
  constructor() {
    super()
    this.state = {
      posters: movieData.movies,
      pickPoster: false,
      posterDetails: null,
    }
  }
  showDetailsPage = (id) => {
    const selectMovie = this.state.posters.find(poster => poster.id === id)
    console.log("selected movie", selectMovie)
    this.setState({pickPoster: true, posterDetails: selectMovie})
  }
  showMainPage = () => {
    this.setState({pickPoster: false})
  }
  render() {
    const isPosterPicked = this.state.pickPoster
    if(isPosterPicked) {
      return (
        <main>
          <DetailsPage posterDetails={this.state.posterDetails} showMain={this.showMainPage}/>
        </main>
      )
    } else {
      return (
        <main>
          <NavBar />
          <MovieContainer posters={this.state.posters} showDetails={this.showDetailsPage}/>
        </main>
      )
    }
  }
}

export default App