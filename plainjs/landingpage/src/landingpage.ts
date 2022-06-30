export const getfox: any = {
  landingpage: {
    __params__: {
      key: '',
      username: '',
      apiEndpoint: 'https://api.getfox.io/api',
      build: false,
    },

    init: (options: any) => {
      return new Promise((resolve, reject) => {
        getfox.landingpage.__params__.key = options.key
        getfox.landingpage.__params__.username = ''
        if (!!options.username) {
          getfox.landingpage.__params__.username = options.username
        }
        getfox.landingpage.__params__.apiEndpoint = 'https://api.getfox.io/api'
        if (options.apiUrl) {
          getfox.landingpage.__params__.apiEndpoint = options.apiUrl
        }
        let buildHtml: boolean = false
        if (!!options.build) {
          buildHtml = options.build
        }

        getfox.landingpage
          .getUser()
          .then((user: any) => {
            if (user) {
              if (buildHtml) {
                getfox.landingpage.build(user)
                console.log('getfox.landingpage.build()')
              }
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

    userlinks: (
      username = getfox.landingpage.__params__.username,
      key = getfox.landingpage.__params__.key
    ) => {
      const query = `{
    userlinks(username:"${username}",apikey:"${key}"){     
      id
      name
      linkUrl
      linkType
      active
      paused
      thumbnail
      background
      isClickable
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
  }`
      return getfox.fetchApi(query).then((data: any) => {
        if (data.errors) {
          throw new Error(data.errors[0].message)
        }
        return data.data.userlinks
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
      return fetch(getfox.landingpage.__params__.apiEndpoint, options).then((res) =>
        res.json()
      )
    },

    build: (user: any) => {
      const body = document.body
      const html = `
    ${
      user.landingPage.fontFamily
        ? `
    <style>
      .profile-landingpage * {
        font-family:${user.landingPage.fontFamily};
      } 
    </style>
    `
        : ''
    }
    <div class="profile-landingpage">
      <div class="landing_page__background--overlay" style="
      ${
        user.landingPage.background
          ? `background-image:url(${user.appUrl}/${user.landingPage.background});`
          : ''
      }
      ${
        user.landingPage.backgroundPosition
          ? `background-position:${user.landingPage.backgroundPosition};`
          : ''
      }
      ${
        user.landingPage.backgroundColor
          ? `background-color:${user.landingPage.backgroundColor};`
          : ''
      }
      "
      >
      <div class="fcol landing_page__header${
        !user.landingPage.background ? ' no-background' : ''
      }"
        style="${
          user.landingPage.blendColor
            ? `background-image: linear-gradient(to bottom, ${
                user.landingPage.blendColor
              }, ${user.landingPage.blendColor.slice(0, 7)}00);`
            : ''
        }"
      >
        <div class="frow fc profiles-names">
        ${
          user.profileImage
            ? `
          <div class="profile-image-overlay" style="pointer-events: none;">
            <form class="fc upload-profile-image">
              <div class="fc profile-logo">
                <label
                  class="profile-logo-gfx"
                  style="background-image: url('${user.appUrl}/${
                user.profileImage
              }');"
                >
              </div>
            </form>
          </div>
          <div class="df flc landing_page__username">
          <a href="${user.appUrl}/${user.username}" style="${
                user.landingPage.textColor
                  ? `color:${user.landingPage.textColor};`
                  : ''
              }">
              ${user.landingPage.title ? user.landingPage.title : user.username}
              </a>
          </div>
        `
            : ''
        }
        </div>
        <div class="df fl frow profiles-names-row landingpage__profiles-names-row">
        ${
          user.socialMedia.instagramId && user.socialMedia.instagramUsername
            ? `
          <a
          href="https://instagram.com/${user.socialMedia.instagramUsername}"
          target="_blank"
          class="fc profile-link--href profile-link--href-icon profile-link--href-ig"
          style="${
            user.landingPage.textColor
              ? `color: ${user.landingPage.textColor};`
              : ''
          }"
        >
          <img src="${
            user.appUrl
          }/static/images/ig-icon-black.svg" alt="instagram" />
        </a>
        `
            : ''
        }
        ${
          user.socialMedia.facebookId && user.socialMedia.facebookUrl
            ? `
          <a
          href="${user.socialMedia.facebookUrl}"
          target="_blank"
          class="fc profile-link--href profile-link--href-icon profile-link--href-ig"
          style="${
            user.landingPage.textColor
              ? `color: ${user.landingPage.textColor};`
              : ''
          }"
        >
          <img src="${
            user.appUrl
          }/static/images/fb-icon-black.svg" alt="facebook" />
        </a>
        `
            : ''
        }
        ${
          user.socialMedia.twitterId && user.socialMedia.twitterUrl
            ? `
          <a
          href="${user.socialMedia.twitterUrl}" }}"
          target="_blank"
          class="fc profile-link--href profile-link--href-icon profile-link--href-ig"
          style="${
            user.landingPage.textColor
              ? `color: ${user.landingPage.textColor};`
              : ''
          }"
        >
          <img src="${
            user.appUrl
          }/static/images/twitter-icon-black.svg" alt="twitter" />
        </a>
        `
            : ''
        }
        </div>
        ${
          user.landingPage.description
            ? `
          <div class="frow fc landing_page__introtext--wrap">
            <div class="f1 landing_page__introtext"
            style="${
              user.landingPage.textDescriptionColor
                ? `color: ${user.landingPage.textDescriptionColor};`
                : ''
            }">${user.landingPage.description}</div>
        </div>
        `
            : ''
        }
      </div>
      <div class="fcol landing_page__content page-content--dashboard">
      <ul class="landing_page__links-list sortable-list">
      ${
        !user.links.length
          ? `
        <div class="fc">${user.translations.noLinksFound}</div>
      `
          : `${user.links
              .map((link: any) => {
                let linkImageSource = ''
                if (!!link.background) {
                  linkImageSource = link.background
                }
                if (!!link.thumbnail) {
                  linkImageSource = link.thumbnail
                }
                if (!!link.product && !!link.product.productImage1) {
                  linkImageSource = link.product.productImage1
                }
                if (!!link.product && !!link.product.productImage2) {
                  linkImageSource = link.product.productImage2
                }
                if (!!link.product && !!link.product.productImage3) {
                  linkImageSource = link.product.productImage3
                }
                if (!!link.product && !!link.product.productImage4) {
                  linkImageSource = link.product.productImage4
                }
                let linkImage = ''
                if (!!linkImageSource) {
                  linkImage = `<div class="link-resource-thumb" style="background-image:url(${user.appUrl}/${linkImageSource});"></div>`
                }
                return `<li 
                class="df flc frow landing_page__link-row ${
                  link.isClickable ? 'landing_page__link-row--clickable' : ''
                } link-resource sortable-list__item with-thumb"
                ${
                  link.isClickable
                    ? `onclick="javascript:getfox_lp.openLink('${link.path}', ${link.linkType})"`
                    : ''
                }
                >
                ${linkImage}
                <a class="f1 fcol">
                  <div class="f1 fc">${link.name}</div>
                  ${
                    link.product
                      ? `
                  <div class="f1 fc">   
                    <div class="flc landingpage__shoplinkproduct-attributes">
                      <span class="product-label">
                        ${
                          link.product.priceLabel === 'onlynow'
                            ? user.translations.onlyNow
                            : ''
                        }
                        ${
                          link.product.priceLabel === 'sale'
                            ? user.translations.sale
                            : ''
                        }
                        ${
                          link.product.priceLabel === 'special'
                            ? user.translations.special
                            : ''
                        }
                      </span>
                      <span class="product-price">${link.product.price} ${
                          link.product.currency
                        }</span> 
                      <span class="product-buy-now">${
                        user.translations.buyNow
                      }</span>
                    </div>
                  </div>
                  `
                      : ''
                  }
                </a>
          </li>`
              })
              .join('')}
      `
      }
        </ul>
        </div>
        <div class="f1 frt copyright copyright-footer">
          <div class="df frt footer-links">
            <a class="footer-link" href="${
              user.appUrl
            }/static/support" target="_blank">${user.translations.support}</a>
            <a class="footer-link" href="${
              user.appUrl
            }/static/privacy" target="_blank">${
        user.translations.privacyPolicy
      }</a>
          </div>
          <div class="frt footer-links">
            <div class="fcol">
              <p class="df">&copy;. <a href="https://getfox.io" class="footer-link-getfox" target="">Getfox</a>. ${
                user.translations.rights
              }.<br/></p>
              <p class="frt">${user.translations.madeWith}❤️${
        user.translations.forAll
      } <a class="footer-link-fox" href="https://gifts.worldwildlife.org/gift-center/gifts/species-adoptions/red-fox.aspx" target="_blank"> ${
        user.translations.foxes
      }</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
      body.insertAdjacentHTML('beforeend', html)
    },
  },
}
window.getfox = getfox
window.getfox_lp = getfox.landingpage
