import React, { Component } from "react"
import "./DetailsPage.css"

class DetailsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detailInfo: [],
      isLoaded: false, 
      error:""
    }
  }
  componentDidMount = () => {
    console.log("details page id", this.props.id)
    console.log("props", this.props)
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
    .then((response) => response.json())
    .then((data) => this.setState({detailInfo: data.movie, isLoaded: true}))
    .catch(() => this.setState({isLoaded: true, error: "Cannot load film. Please try again!"}))
  }
  render() {
    const poster = this.state.detailInfo
    return (
      <div>
        <div style={{display: this.state.isLoaded ? "none" : "block"}}>Loading... </div>
        <div style={{display: this.state.error ? "block" : "none"}}> {this.state.error} </div>
        <div className="posterSection" style={{backgroundImage: `url(${poster.backdrop_path})`}}>
          <article className="posterDetails">
            <p className="details">{poster.title}</p>
            <p className="details">{poster.tagline}</p>
            <p className="details">Release Date: {poster.release_date}</p>
            <p className="details">Category: {poster.genres}</p>
            <p className="details">Rating: {poster.average_rating}</p>
            <p className="details">Budget: {poster.budget}</p>
            <p className="details">Revenue: {poster.revenue}</p>
            <p className="details">Runtime: {poster.runtime} minutes</p>
          </article>
        </div>
        <footer>{poster.overview}</footer>
      </div>
    )
  }
}
export default DetailsPage