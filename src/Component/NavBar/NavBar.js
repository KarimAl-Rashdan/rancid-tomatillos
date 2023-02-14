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
              <div className="searchSort">
                <input className="search"
                  type="text"
                  placeholder="Search Movies"
                  name="search"
                  // value={this.state.search}
                />
                <div className="sortButton">
                  <button className="dropBtn">Sort
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="sortOptions">
                    <a href="#">Ascending ↑</a>
                    <a href="#">Descending ↓</a>
                  </div>
                </div>
              </div>
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