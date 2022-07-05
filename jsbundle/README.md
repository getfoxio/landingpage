# Getfox Landing Page bundle

React component library for connecting with Getfox API endpoints and build the Landing Page pages.

## Distributions

- `cjs` - commonjs bundle for npm packages
- `esm` - ES module bundle for React imports (see `react-demo`)
- `iife` - web bundle for browser usage (see `django`). Includes HTML template builder
  
## Browser usage (IIFE script)

1. Add references inside the HTML `head` tag

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://api.getfox.io/static/css/lp.css"
/>
<script src="https://api.getfox.io/static/js/landingpage.js"></script>
```

2. Use the code inside a `script` tag

```javascript
getfox_lp.init({
  key: "{apikey}",
  username: "{username}",
  build: {true|false, default: true},
});
```

Where:

- `username` - your Getfox username
- `apikey` - your Getfox API Key generated in your profile page
- `build` (optional) - if true, it builds landing page template in your page `body`

### Retrieving user's data

Add the script inside `script` tag.

```javascript
getfox_lp
  .getUser({
    key: "{apikey}",
    username: "{username}",
  })
  .then((response) => {
    // console.log(response.data.user)
  });
```

## Build

```
npm run build
```
