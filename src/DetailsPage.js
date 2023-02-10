import React, { Component } from "react"
import { getData } from "./ApiCalls"
import "./DetailsPage.css"

class DetailsPage extends Component {
  constructor() {
    super()
    this.state = {
      detailInfo: [],
      isLoaded: false
    }
  }
  componentDidMount = () => {
    getData(this.props.posterDetails.id)
    .then((data) => this.setState({detailInfo: data[0].movie}))
    .catch((error) => this.setState({isLoaded: true, error}))
  }
  render() {
    const poster = this.state.detailInfo
  return (
    <div>
      <div className="navbar">
        <h1>Rancid Tomatillos</h1>
        <button onClick={() => this.props.showMain()}>Return To Home</button>
      </div>
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