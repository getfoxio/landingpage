import React, { useState, useEffect } from 'react'
import LandingPage from './components/LandingPage'

export default function App() {
	const [username, setUsername] = useState('kubix')
	const [apikey, setApikey] = useState('gfk_271ce8d301c3e1c506be80e94ec45a82')

  return (
    <div className="App">
      <LandingPage username={username} apikey={apikey} />
    </div>
  )
}
