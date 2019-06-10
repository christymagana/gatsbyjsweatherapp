import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/darklayout"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    <h1>DarkSky Weather App - Home</h1> 
    <p>
      This page uses DarkSky as the weather data source.
    </p>
  </Layout>
)
