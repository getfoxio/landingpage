# Getfox Landing Page

Runs Getfox Landing Page on remote servers.

## Project structure

- `django` - Django test server running landing page imported with plain JS script
- `bundlejs` - JS bundle for connecting with Getfox API endpoint and build landing page using plain JS
- `landingpage-react` - ReactJS component library for building landing pages in ReactJS applications
- `react-demo` - ReactJS server that runs `landingpage-react` library and renders landing page.

## API Reference

Getfox provides the `GraphQL` API endpoint.

```
https://api.getfox.io/graphql
```

### User query
\
Following query retrieves information about your Getfox user. It includes any information that you need to create landing page:

- user's basic information
- landing page layout specific settings
- social media information
- links and products information
- translations used for creating landing page in language that was associated with your user's account

```
query {
  user(username: "${username}",apikey:"${key}") {
      id
      username
      email
      profileImage
      language
      appUrl
      landingPage {
        title
        description
        background
        backgroundColor
        backgroundPosition
        textColor
        fontFamily
        textDescriptionColor
        googleAnalyticsId
        blendColor
      }
      socialMedia {
        instagramId
        instagramUsername
        facebookId
        facebookName
        facebookUrl
        twitterId
        twitterName
        twitterUsername
        twitterUrl
      }
      links {
        id
        name
        linkUrl
        linkType
        isClickable
        background
        thumbnail
        path
        product {
          name
          price
          priceLabel
          currency
          quantity
          description
          productImage1
          productImage2
          productImage3
          productImage4
        }
      }
      translations {
        onlyNow
        sale
        special
        buyNow
        rights
        madeWith
        forAll
        foxes
        support
        privacyPolicy
        noLinksFound
      }
    }
  }
}
```
