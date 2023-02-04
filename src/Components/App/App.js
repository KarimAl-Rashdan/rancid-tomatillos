import React, { Component } from "react";
import "./App.css"
import movieData from './movieData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      posters: movieData.movies
    }
  }
  render() {
    return (
      <MainPage />
      <DetailsPage />
    )
  }
}

export default App