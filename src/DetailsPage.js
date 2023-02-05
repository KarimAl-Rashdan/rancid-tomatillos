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
      <img src={posterDetails.backdrop_path} alt="Poster Background" />
      <footer>Hey there</footer>
    </div>
  )
}

export default DetailsPage