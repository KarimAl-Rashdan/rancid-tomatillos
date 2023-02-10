import React, { Component } from "react"
import "./NavBar.css"

class NavBar extends Component {
  constructor() {
    super()
    this.state = {
      search: ""
    }
  }
  render() {
    if (this.props.mainpage) {
      return (
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
        )
    } else {
      return (
        <div className="navbar">
          <h1>Rancid Tomatillos</h1>
          <button onClick={() => this.props.showMain()}>Return to Home</button>
        </div>
      )
    }
  }
}
export default NavBar