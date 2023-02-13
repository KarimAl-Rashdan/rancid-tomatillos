import React, { Component } from "react"
import "./DetailsPage.css"

class DetailsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detailInfo: [],
      isLoaded: false
    }
  }
  componentDidMount = () => {
    console.log("details page id", this.props.id)
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("heye baby", this.state.detailInfo)
      return this.setState({detailInfo: data.movie})
    })
    .catch((error) => this.setState({isLoaded: true, error}))
  }
  render() {
    const poster = this.state.detailInfo
    return (
      <div>
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