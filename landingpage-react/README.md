# Getfox Landing Page - React Component Library

React component library for importing Getfox Landing pages into React applications.

## How it works

It generates Getfox Landing Page in a page where your application is published. It pulls user's data from the Getfox API endpoint and generates React template in your application scope.

## Usage

1. Install the package:

```
npm install @getfoxio/landingpage-react
```

2. Example code usage in your React application:

```javascript
import { LandingPage } from '@getfoxio/landingpage-react'
import '@getfoxio/landingpage-react/dist/styles.css'

export default function App() {
  return <LandingPage username="{username}" apiKey="{apiKey}" />
}
```

Where:

- `username` - your Getfox username
- `apikey` - your Getfox API Key generated in your profile page

## Dependencies

Project imports the `jsbundle/dist/esm` bundle to fetch user data from API endpoint. It's placed in the `src/lib` folder.

## Build

1. Install npm packages

```
npm install
```

2. Build project

```
npm run build
```
