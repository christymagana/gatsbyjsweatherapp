import React from "react"

import { StaticQuery, Link, graphql } from "gatsby"

/* import "/home/cabox/workspace/gatsby-starter-weather/src/styles/global.css" */

// import "./src/styles/global.css" 

import "../styles/global.css" 

export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
    openWeather{
      coord{
        lon
        lat
      
      }
      weather {
        id
        main
        description
        icon
      }
      dt
      wind {
        speed
        deg
      }
      name
    }
  }`
}
    render={data => (
  <div>
        <Link to="/" style={{ float: `right`}}>
      Home
    </Link>
    {children}
        {/* <Link to="/">Home    </Link>  */}
     <div class="bg"></div>
     <h3>
            <h3>Weather data for the city of {data.openWeather.name}</h3><br></br>
            <h3>City Coordinates: lat: {data.openWeather.coord.lat}, lon: {data.openWeather.coord.lon}</h3><br></br>
         
            
     </h3> 
	
  </div>
    )}
  />
    )