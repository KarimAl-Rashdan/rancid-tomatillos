import React, { Component } from "react";
import "./App.css"
import DetailsPage from "./DetailsPage"
import MovieContainer from "./MovieContainer";
import { getData } from "./ApiCalls";

class App extends Component {
  constructor() {
    super()
    this.state = {
      posters: [],
      isLoaded: false,
      error: "",
      pickPoster: false,
      posterDetails: null,
    }
  }
  componentDidMount = () => {
    getData()
    .then((data) => this.setState({isLoaded:true, posters:data[0].movies}))
    .catch((error) => this.setState({isLoaded:true, error}))
  }
  showDetailsPage = (id) => {
    getData(id)
    .then((data) => this.setState({isLoaded:true, pickPoster: true, posterDetails: data[1].movie}))
    .catch((error) => this.setState({isLoaded:true, error}))
    // const selectMovie = this.state.posters.find(poster => poster.id === id)
    // console.log("selectMovie", selectMovie)
    // return this.setState({pickPoster: true, posterDetails: selectMovie})
  }
  showMainPage = () => {
    this.setState({pickPoster: false, posterDetails: null})
  }
  render() {
    const { error, isLoaded } = this.state
    const isPosterPicked = this.state.pickPoster
    console.log("state HEYA", this.state)
    if(error) {
      return <div>You have an error: {error.message}</div>
    } else if(!isLoaded) {
      return <div>Loading...</div>
    } 
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

export default App