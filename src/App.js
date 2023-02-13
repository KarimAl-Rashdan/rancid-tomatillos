import React, { Component } from "react";
import "./App.css"
import DetailsPage from "./DetailsPage"
import MovieContainer from "./MovieContainer";
// import { getData } from "./ApiCalls";
import NavBar from "./NavBar";
import { Route } from "react-router-dom"

class App extends Component {
  constructor() {
    super()
    this.state = {
      posters: [],
      isLoaded: false,
      error: "",
      // pickPoster: false,
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
    .catch((error) => this.setState({isLoaded:false, error}))
  }
  showDetailsPage = (id) => {
    console.log("show details page is firing", id)
    const selectedPoster = this.state.posters.find(poster => poster.id === id)
    console.log("selsectedposter", selectedPoster)
    this.setState({posterDetails: selectedPoster, pickPoster: true, isLoaded: true, mainpage: false})
    console.log("posterDetails", this.state)
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
                console.log("this is match", match)
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