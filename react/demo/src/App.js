import React from 'react'
import { LandingPage } from '@getfoxio/landingpage-react'

export default function App() {
  return (
    <div className="App">
      <LandingPage
        username=""
        apiKey=""
        apiEndpoint="https://api.getfox.io/graphql"
      />
    </div>
  )
}
