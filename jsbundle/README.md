# Getfox Landing Page bundle

React component library for connecting with Getfox API endpoints and build the Landing Page pages.

## Distributions

- `cjs` - commonjs bundle for npm packages
- `esm` - ES module bundle for React imports (see `react-demo`)
- `iife` - web bundle for browser usage (see `django`)

## Browser usage (IIFE script)

Import in HTML `head`

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://api.getfox.io/static/css/lp.css"
/>
<script src="https://api.getfox.io/static/js/landingpage.js"></script>
```

Use the code inside a `script` tag

```javascript
getfox_lp.init({
  key: "{apikey}",
  username: "{username}",
  build: {true|false},
});
```

Where:

- `username` - your Getfox username
- `apikey` - your Getfox API Key generated in your profile page
- `build` - if true it builds Landing PAge template in your page `body` 

## Build

```
npm run build
```
