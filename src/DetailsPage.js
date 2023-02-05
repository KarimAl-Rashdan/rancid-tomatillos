import React from "react"
import NavBar from "./NavBar"
import "./DetailsPage.css"

const DetailsPage = ({posterDetails, showMain}) => {
  return (
    <div>
      <div className="navbar">
        <h1>Rancid Tomatillos</h1>
        <button onClick={() => showMain()}>Return To Home</button>
      </div>
      <div className="posterSection" style={{backgroundImage: `url(${posterDetails.backdrop_path})`}}>
        {/* <img src={posterDetails.backdrop_path} alt="Poster Background" /> */}
        <article className="posterDetails">
          <p className="details">{posterDetails.title}</p>
          <p className="details">{posterDetails.average_rating}</p>
          <p className="details">{posterDetails.release_date}</p>
        </article>
      </div>
      <footer>This movie is about drama and romance.</footer>
    </div>
  )
}

export default DetailsPage