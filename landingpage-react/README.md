# Getfox Landing Page - React Component Library

React component library for importing Getfox Landing pages into React applications.

## How it works

It generates Getfox Landing Page in a page where your application is published. It pulls user's data from the Getfox API endpoint. It appends landing page structure into your React application scope.

## Usage

1. Install the package from tarball:

```
npm install getfoxio-landingpage-react-1.0.0.tgz
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

Project imports the `jsbundle/dist/esm` javascript bundle and requests for user's data from API endpoint. The bundle file is located in the `src/lib` folder.

## Build

1. Install npm packages

```
npm install
```

2. Build project

```
npm run build
```

2. Create tarball package

```
npm pack
```
