import React, { Component } from "react";
import "./App.css"
// import movieData from "./movieData";
import DetailsPage from "./DetailsPage"
import MovieContainer from "./MovieContainer";
import { getData } from "./ApiCalls";

class App extends Component {
  constructor() {
    super()
    this.state = {
      posters: [],
      // posters: movieData.movies,
      isLoaded: false,
      error: "",
      pickPoster: false,
      posterDetails: null,
    }
  }
  componentDidMount = () => {
    getData()
    .then((data) => {
      this.setState({isLoaded:true, posters: data.movies})
    })
    .catch((error) => {
      this.setState({isLoaded:true, error})
      console.log("error", error)
    })
    console.log(this.state.posters)
  }
  showDetailsPage = (id) => {
    const selectMovie = this.state.posters.find(poster => poster.id === id)
    this.setState({pickPoster: true, posterDetails: selectMovie})
  }
  showMainPage = () => {
    this.setState({pickPoster: false})
  }
  render() {
    const { error, isLoaded } = this.state
    const isPosterPicked = this.state.pickPoster
    // this.componentDidMount()
    if(error) {
      return <div>You have an error: {error.message}</div>
    } else if(!isLoaded) {
      return <div>Loading...</div>
    } else {
      if(isPosterPicked) {
        return (
          <main>
            <DetailsPage posterDetails={this.state.posterDetails} showMain={this.showMainPage}/>
          </main>
        )
      } else {
        return (
          <main>
            <MovieContainer posters={this.state.posters} showDetails={this.showDetailsPage}/>
          </main>
        )
      }
    }
  }
}

export default App