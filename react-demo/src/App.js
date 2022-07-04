import React from 'react'
import { LandingPage } from '@getfoxio/landingpage-react'
import '@getfoxio/landingpage-react/dist/styles.css'

export default function App() {
  return (
    <div className="App">
      <LandingPage
        username={process.env.REACT_APP_USERNAME}
        apiKey={process.env.REACT_APP_API_KEY}
      />
    </div>
  )
}
