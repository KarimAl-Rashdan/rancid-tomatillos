import React, { Component } from "react";
import "./App.css"
import DetailsPage from "./DetailsPage"
import MovieContainer from "./MovieContainer";
import { getData } from "./ApiCalls";
import NavBar from "./NavBar";

class App extends Component {
  constructor() {
    super()
    this.state = {
      posters: [],
      isLoaded: false,
      error: "",
      pickPoster: false,
      posterDetails: null,
      mainpage: true
    }
  }
  componentDidMount = () => {
    getData()
    .then((data) => this.setState({isLoaded:true, posters:data[0].movies}))
    .catch((error) => this.setState({isLoaded:true, error}))
  }
  showDetailsPage = (id) => {
    const selectedPoster = this.state.posters.find(poster => poster.id === id)
    this.setState({posterDetails: selectedPoster, pickPoster: true, isLoaded: true, mainpage: false})
  }
  showMainPage = () => {
    this.setState({pickPoster: false, posterDetails: null, mainpage: true})
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
    if (isPosterPicked) {
      return (
        <main>
          <NavBar mainpage={this.state.mainpage} showMain={this.showMainPage}/>
          <DetailsPage posterDetails={this.state.posterDetails.id} showMain={this.showMainPage}/>
        </main>
      )
    } else {
      return (
        <div>
          <NavBar mainpage={this.state.mainpage} showMain={this.showMainPage}/>
          <MovieContainer posters={this.state.posters} showDetails={this.showDetailsPage}/>
        </div>
      )
    }
  }
}

export default App