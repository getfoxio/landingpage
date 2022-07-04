export const getfox: any = {
  landingpage: {
    __params__: {
      key: '',
      username: '',
      apiEndpoint: 'https://api.getfox.io/graphql',
      build: false,
      appUrl: 'https://getfox.io',
    },

    init: (options: any) => {
      return new Promise((resolve, reject) => {
        getfox.landingpage.__params__.key = options.key
        getfox.landingpage.__params__.username = ''
        if (!!options.username) {
          getfox.landingpage.__params__.username = options.username
        }
        if (options.apiUrl) {
          getfox.landingpage.__params__.apiEndpoint = options.apiUrl
        }
        
        if (!!options.build && options.build) {
          console.warn('HTML template builder is unavailable in this version. Use version with HTML builder.')
        }

        getfox.landingpage
          .getUser()
          .then((user: any) => {
            if (user) {
              resolve(user)
            }
          })
          .catch((error: any) => {
            reject(error)
          })
      })
    },

    openLink: (link: any, linkType: number) => {
      window.open(link, linkType !== 3 ? '_blank' : '_self')
    },

    getUser: (
      username = getfox.landingpage.__params__.username,
      key = getfox.landingpage.__params__.key
    ) => {
      const query = `{
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
  }`
      return getfox.landingpage
        .fetchApi(query)
        .then((data: any) => {
          if (!!data.errors) {
            console.log('GetfoxAPI: ', data.errors[0].message)
            return null
          }
          if (!data.errors) {
            return data.data.user
          }
        })
        .catch((reason: any) => {
          console.log('GetfoxAPI: Unable to connect to API service.', reason)
        })
    },

    fetchApi: (query: string) => {
      const options = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query,
        }),
      }
      return fetch(getfox.landingpage.__params__.apiEndpoint, options).then(
        (res) => res.json()
      )
    },
  },
}
window.getfox = getfox
window.getfox_lp = getfox.landingpage
