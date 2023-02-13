import React, { Component } from "react";
import "./App.css"
import DetailsPage from "./Component/DetailsPage/DetailsPage"
import MovieContainer from "./Component/MovieContainer/MovieContainer";
import NavBar from "./Component/NavBar/NavBar";
import { Route } from "react-router-dom"

class App extends Component {
  constructor() {
    super()
    this.state = {
      posters: [],
      isLoaded: false,
      error: "",
      posterDetails: null,
      mainpage: true
    }
  }
  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => response.json())
      .then((data) => {
        this.setState({isLoaded:true, posters:data.movies})
      })
      .catch(() => this.setState({isLoaded: true, error: "Cannot load movies. Please try again!"}))
  }
  showDetailsPage = (id) => {
    const selectedPoster = this.state.posters.find(poster => poster.id === id)
    this.setState({posterDetails: selectedPoster,isLoaded: true, mainpage: false})
  }
  showMainPage = () => {
    this.setState({posterDetails: null, mainpage: true})
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
      return (
        <div>
          <NavBar mainpage={this.state.mainpage} showMain={this.showMainPage}/>
            <Route 
              exact path="/" 
              render= {() => 
                <div>
                  <MovieContainer posters={this.state.posters} showDetails={this.showDetailsPage}/>
                </div>
              }
            />
            <Route 
              exact path="/:id" 
              render={({ match }) => {
                return (
                  <div>
                    <DetailsPage id={match.params.id} />
                  </div>
                )
              }}
            />
        </div>
      )
  }
}
  
export default App