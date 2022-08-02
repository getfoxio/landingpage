# Getfox Landing Page - Vue integration

Project contains:

- Landing Page component library
- Demo server

It generates Getfox Landing Page in a page where your application is published. It pulls user's data from the Getfox API endpoint. It appends landing page structure into your Vue application scope.

## Dependencies

Project imports the `jsbundle/dist/esm` javascript bundle and requests for user's data from API endpoint. The bundle file is located in the `src/lib` folder.

## Usage in standalone project

1. Install the package from tarball (the file can be found in the `landingpage-component-library/package' folder):

```
npm install getfoxio-landingpage-vue-1.0.0.tgz
```

2. Example code usage in your Vue application:

Add to the `main.ts` file

```javascript
import getfox_landingpage from '@getfoxio/landingpage-vue'

app.use(getfox_landingpage)
```

Insert in your application component file
```html
<template>
  ...
  <LandingPage :username="username" :apikey="apikey" />
  ...
</template>

<style>
...
@import 'https://api.getfox.io/static/css/lp.css';
...
</style>

```

Where:

- `username` - your Getfox username
- `apikey` - your Getfox API Key generated in your profile page

## Running demo server

Demo server sources can be found in the `demo-server` folder. 

1. Set environmental variables in the `.env` file

```
VITE_USERNAME={username}
VITE_APIKEY={apikey}
```

2. Run the server

```
npm run dev
```

## Building component library

Component library sources can be found in the `landingpage-component-library` folder. 

1. Run in the command shell:

```
npm i
npm run build
```

2. In order to build a tarball package run:

```
npm pack
```

The tarball package can be found in the `landingpage-component-library/package/landingpage` directory.

In order to use the library, the package should be installed in the destination project using the `npm install getfoxio-landingpage-vue-1.0.0.tgz` command.