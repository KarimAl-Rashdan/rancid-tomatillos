import React, { Component } from "react"
import "./NavBar.css"
import { Route, Link } from "react-router-dom"

class NavBar extends Component {
  constructor() {
    super()
    this.state = {
      search: ""
    }
  }
  render() {
    return(
      <nav>
        <Route 
          exact path="/" 
          render= {() => 
            <div className="navbar">
              <h1>Rancid Tomatillos</h1>
              <button className="sortButton" onClick={() => {this.props.sortBestMovies()}}>Sort Movies</button>
            </div>
          }
        />                    
        <Route 
          exact path="/:id" 
          render={() => 
            <div className="navbar">
              <h1>Rancid Tomatillos</h1>
                <Link to={"/"}>
                  <button className="homeBtn" onClick={() => {this.props.showMain()}}>
                    Return to Home
                  </button>
                </Link>
            </div>  
            }
        />
      </nav>
    )
  }
}

export default NavBar