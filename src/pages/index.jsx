import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
// import "/home/cabox/workspace/gatsby-hello-world/src/styles/global.css"

export default () => (
  <div /*style={{ color: `purple` }} */>
    <Header headerText="Welcome to my Gatsby JS Weather App!" />
    <nav>
    <ul>
    <li><Link to="/">Home</Link></li> 
    <li><Link to="/darkabout/">DarkSky</Link> </li>
    <li><Link to="/openabout/">OpenWeather</Link> </li>
      </ul>
    </nav>
    
    <section class="hp"></section>
    </div>
)