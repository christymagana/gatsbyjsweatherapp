import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/openlayout"

export default ({ data }) => (
  <Layout>
    <h1>OpenWeather App</h1> 
    <p>
      This page uses OpenWeather as the weather data source.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`