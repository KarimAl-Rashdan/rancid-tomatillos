import React from "react"
import "./NavBar.css"
import { Route, Link } from "react-router-dom"

const NavBar = ({sortBestMovies, showMain}) => {
    return(
      <nav>
        <Route 
          exact path="/" 
          render= {() => 
            <div className="navbar">
              <h1>Rancid Tomatillos</h1>
              <button className="sortButton" onClick={() => sortBestMovies()}>Sort Movies</button>
            </div>
          }
        />                    
        <Route 
          exact path="/:id" 
          render={() => 
            <div className="navbar">
              <h1>Rancid Tomatillos</h1>
                <Link to={"/"}>
                  <button className="homeBtn" onClick={() => showMain()}>
                    Return to Home
                  </button>
                </Link>
            </div>  
            }
        />
      </nav>
    )

}


export default NavBar