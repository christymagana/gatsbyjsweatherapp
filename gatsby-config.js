module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Weather - DarkSky and OpenWeather`,
  /*  pathPrefix: '/static-gatsby-weather',*/
  },
  plugins: [
 {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: '95e452e053b58a31c4ea3ab984d576c6',
        location: 'Chicago',
        units: 'imperial',
        type: 'weather'
      },
    },
  
    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: '4b98db4614baaa23051bbb11f798cfe2',
        latitude: '43.03',
        longitude: '-87.74',
        exclude: ['minutely']
      },
    } 
    
  ]
}