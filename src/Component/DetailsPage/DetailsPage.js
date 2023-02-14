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
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
    .then((response) => response.json())
    .then((data) => this.setState({detailInfo: data.movie, isLoaded: true}))
    .catch(() => this.setState({isLoaded: true, error: "Cannot load movie information. Please try again!"}))
  }
  render() {
    const poster = this.state.detailInfo
    return (
      <div>
        <div style={{display: this.state.isLoaded ? "none" : "block"}}>Loading... </div>
        <div style={{display: this.state.error ? "block" : "none"}}><h1>{this.state.error}</h1></div>
        <div className="posterSection" style={{backgroundImage: `url(${poster.backdrop_path})`}}>
          <article className="posterDetails">
            <p className="details title">{poster.title}</p>
            <p className="details tagline">{poster.tagline}</p>
            {poster.release_date && <p className="details releaseDate">Release Date: {poster.release_date}</p>}
            {poster.genres && <p className="details category">Category: {poster.genres}</p>}
            {poster.average_rating && <p className="details rating">Rating: {poster.average_rating}</p>}
            {poster.budget && <p className="details budget">Budget: $ {poster.budget}</p>}
            {poster.revenue && <p className="details revenue">Revenue: $ {poster.revenue}</p>}
            {poster.runtime && <p className="details runtime">Runtime: {poster.runtime} minutes</p>}
          </article>
        </div>
        <footer className="overview">{poster.overview}</footer>
      </div>
    )
  }
}
export default DetailsPage