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
    const selectedPoster = this.state.posters.find(poster => poster.id === id)
    this.setState({posterDetails: selectedPoster, pickPoster: true, isLoaded: true})
  }
  showMainPage = () => {
    this.setState({pickPoster: false, posterDetails: null})
  }
  showStateMessage = () => {
    const { error, isLoaded } = this.state
    if(error) {
      return <div>You have an error: {error.message}</div>
    } else if(!isLoaded) {
      return <div>Loading...</div>
    } 
  }
  render() {
    this.showStateMessage()
    const isPosterPicked = this.state.pickPoster
    //pass id into detaillspage
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