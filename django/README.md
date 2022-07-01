# Django test server

Server to display Getfox Landing Page using browser script.

## Usage

1. Build `Docker` container and run server

```
docker-compose up --build pyserver
```

2. Open in browser

```
https://localhost:8088/lp_js/{username}/{apikey}

```

Where:

- `username` - your Getfox username
- `apikey` - your Getfox API Key generated in your profile page

### Dependencies

Page imports the `jsbundle/dist/iife` landingpage bundle to fetch user data from API endpoint and build the Landing Page template.

```

```
