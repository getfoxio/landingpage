# Getfox Landing Page - Angular integration

Project contains:

- Landing Page component library
- Demo server

## How it works

It generates Getfox Landing Page in a page where your application is published. It pulls user's data from the Getfox API endpoint. It appends landing page structure into your Vue application scope.

## Dependencies

Project imports the `jsbundle/dist/esm` javascript bundle and requests for user's data from API endpoint. The bundle file is located in the `src/lib` folder.

## Usage in standalone project

1. Install the package from tarball (the file can be found in the `dist/landingpage' folder):

```
npm install getfoxio-landingpage-angular-1.0.0.tgz
```

2. Example code usage in your Angular application:

Add to the `{you_component}.module.ts` file

```javascript
import { LandingpageModule } from 'landingpage'

@NgModule({
  ...
  imports: [..., LandingpageModule],
  ...
})
```

Add to the `{you_component}.component.html` file

```javascript
<lib-landingpage username="{username}" apikey="{apikey}"></lib-landingpage>
```

Where:

- `username` - your Getfox username
- `apikey` - your Getfox API Key generated in your profile page

## Demo server

1. Set environmental variables in the `environments/environment.ts` and `environments/environment.prod.ts` files

```
username:'{username}',
apikey:'{apikey}'
```

2. Run the server

```
ng serve --open
```

## Building component library

Run in the command shell:

```
ng build landingpage --configuration=production
```

In order to build a tarball package run:

```
npm run pack_landingpage
```

The tarball package can be found in the `dist/landingpage` directory.
