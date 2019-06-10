import React from "react"

import { StaticQuery, Link, graphql } from "gatsby"

/* import "/home/cabox/workspace/gatsby-starter-weather/src/styles/global.css" */

//import "./src/styles/global.css" 

import "../styles/global.css" 

export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
  weatherData{
    latitude
    longitude
    timezone
    currently {
      time
      summary
      icon
      nearestStormDistance
      precipIntensity
      precipProbability
      temperature
      apparentTemperature
      dewPoint
      humidity
      pressure
      windSpeed
      windGust
      windBearing
      cloudCover
      uvIndex
      visibility
      ozone
    }
  }
  
}  `
}
    render={data => (
  <div>
    <Link to="/" style={{ float: `right`}}>
      Home
    </Link>
    {children}
{/*    <Link to="/">Home </Link> */}
    <div class="foreground"></div>
      <h3>
      <h3>Current Temp: {data.weatherData.currently.temperature} °F</h3><br></br>
      <h3>Current Summary: {data.weatherData.currently.summary}</h3><br></br>
      <h3>Humidity: {data.weatherData.currently.humidity}</h3><br></br>
      <h3>Latitude: {data.weatherData.latitude}</h3><br></br>
      <h3>Longitude: {data.weatherData.longitude}</h3><br></br>
    </h3>  
  </div>
    )}
  />
    )