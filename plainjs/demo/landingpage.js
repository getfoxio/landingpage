"use strict";const getfox={__params__:{key:"",username:"",apiEndpoint:"https://api.getfox.io/api",build:!1},init:a=>new Promise((e,t)=>{getfox.__params__.key=a.key,getfox.__params__.username="",a.username&&(getfox.__params__.username=a.username),getfox.__params__.apiEndpoint="https://api.getfox.io/api",a.apiUrl&&(getfox.__params__.apiEndpoint=a.apiUrl);let i=!0;a.build&&(i=a.build),getfox.getUser().then(o=>{o&&(i&&getfox.build(o),e(o))}).catch(o=>{t(o)})}),openLink:(a,e)=>{window.open(a,e!==3?"_blank":"_self")},getUser:(a=getfox.__params__.username,e=getfox.__params__.key)=>{const t=`{
    user(username: "${a}",apikey:"${e}") {
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
  }`;return getfox.fetchApi(t).then(i=>{if(i.errors)return console.log("GetfoxAPI: ",i.errors[0].message),null;if(!i.errors)return i.data.user}).catch(i=>{console.log("GetfoxAPI: Unable to connect to API service.",i)})},userlinks:(a=getfox.__params__.username,e=getfox.__params__.key)=>{const t=`{
    userlinks(username:"${a}",apikey:"${e}"){     
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
  }`;return getfox.fetchApi(t).then(i=>{if(i.errors)throw new Error(i.errors[0].message);return i.data.userlinks})},fetchApi:a=>{const e={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:a})};return fetch(getfox.__params__.apiEndpoint,e).then(t=>t.json())},build:a=>{const e=document.body,t=`
    ${a.landingPage.fontFamily?`
    <style>
      .profile-landingpage * {
        font-family:${a.landingPage.fontFamily};
      } 
    </style>
    `:""}
    <div class="profile-landingpage">
      <div class="landing_page__background--overlay" style="
      ${a.landingPage.background?`background-image:url(${a.appUrl}/${a.landingPage.background});`:""}
      ${a.landingPage.backgroundPosition?`background-position:${a.landingPage.backgroundPosition};`:""}
      ${a.landingPage.backgroundColor?`background-color:${a.landingPage.backgroundColor};`:""}
      "
      >
      <div class="fcol landing_page__header${a.landingPage.background?"":" no-background"}"
        style="${a.landingPage.blendColor?`background-image: linear-gradient(to bottom, ${a.landingPage.blendColor}, ${a.landingPage.blendColor.slice(0,7)}00);`:""}"
      >
        <div class="frow fc profiles-names">
        ${a.profileImage?`
          <div class="profile-image-overlay" style="pointer-events: none;">
            <form class="fc upload-profile-image">
              <div class="fc profile-logo">
                <label
                  class="profile-logo-gfx"
                  style="background-image: url('${a.appUrl}/${a.profileImage}');"
                >
              </div>
            </form>
          </div>
          <div class="df flc landing_page__username">
          <a href="${a.appUrl}/${a.username}" style="${a.landingPage.textColor?`color:${a.landingPage.textColor};`:""}">
              ${a.landingPage.title?a.landingPage.title:a.username}
              </a>
          </div>
        `:""}
        </div>
        <div class="df fl frow profiles-names-row landingpage__profiles-names-row">
        ${a.socialMedia.instagramId&&a.socialMedia.instagramUsername?`
          <a
          href="https://instagram.com/${a.socialMedia.instagramUsername}"
          target="_blank"
          class="fc profile-link--href profile-link--href-icon profile-link--href-ig"
          style="${a.landingPage.textColor?`color: ${a.landingPage.textColor};`:""}"
        >
          <img src="${a.appUrl}/static/images/ig-icon-black.svg" alt="instagram" />
        </a>
        `:""}
        ${a.socialMedia.facebookId&&a.socialMedia.facebookUrl?`
          <a
          href="${a.socialMedia.facebookUrl}"
          target="_blank"
          class="fc profile-link--href profile-link--href-icon profile-link--href-ig"
          style="${a.landingPage.textColor?`color: ${a.landingPage.textColor};`:""}"
        >
          <img src="${a.appUrl}/static/images/fb-icon-black.svg" alt="facebook" />
        </a>
        `:""}
        ${a.socialMedia.twitterId&&a.socialMedia.twitterUrl?`
          <a
          href="${a.socialMedia.twitterUrl}" }}"
          target="_blank"
          class="fc profile-link--href profile-link--href-icon profile-link--href-ig"
          style="${a.landingPage.textColor?`color: ${a.landingPage.textColor};`:""}"
        >
          <img src="${a.appUrl}/static/images/twitter-icon-black.svg" alt="twitter" />
        </a>
        `:""}
        </div>
        ${a.landingPage.description?`
          <div class="frow fc landing_page__introtext--wrap">
            <div class="f1 landing_page__introtext"
            style="${a.landingPage.textDescriptionColor?`color: ${a.landingPage.textDescriptionColor};`:""}">${a.landingPage.description}</div>
        </div>
        `:""}
      </div>
      <div class="fcol landing_page__content page-content--dashboard">
      <ul class="landing_page__links-list sortable-list">
      ${a.links.length?`${a.links.map(i=>{let o="";i.background&&(o=i.background),i.thumbnail&&(o=i.thumbnail),!!i.product&&!!i.product.productImage1&&(o=i.product.productImage1),!!i.product&&!!i.product.productImage2&&(o=i.product.productImage2),!!i.product&&!!i.product.productImage3&&(o=i.product.productImage3),!!i.product&&!!i.product.productImage4&&(o=i.product.productImage4);let l="";return o&&(l=`<div class="link-resource-thumb" style="background-image:url(${a.appUrl}/${o});"></div>`),`<li 
                class="df flc frow landing_page__link-row ${i.isClickable?"landing_page__link-row--clickable":""} link-resource sortable-list__item with-thumb"
                ${i.isClickable?`onclick="javascript:getfox.openLink('${i.path}', ${i.linkType})"`:""}
                >
                ${l}
                <a class="f1 fcol">
                  <div class="f1 fc">${i.name}</div>
                  ${i.product?`
                  <div class="f1 fc">   
                    <div class="flc landingpage__shoplinkproduct-attributes">
                      <span class="product-label">
                        ${i.product.priceLabel==="onlynow"?a.translations.onlyNow:""}
                        ${i.product.priceLabel==="sale"?a.translations.sale:""}
                        ${i.product.priceLabel==="special"?a.translations.special:""}
                      </span>
                      <span class="product-price">${i.product.price} ${i.product.currency}</span> 
                      <span class="product-buy-now">${a.translations.buyNow}</span>
                    </div>
                  </div>
                  `:""}
                </a>
          </li>`}).join("")}
      `:`
        <div class="fc">${a.translations.noLinksFound}</div>
      `}
        </ul>
        </div>
        <div class="f1 frt copyright copyright-footer">
          <div class="df frt footer-links">
            <a class="footer-link" href="${a.appUrl}/static/support" target="_blank">${a.translations.support}</a>
            <a class="footer-link" href="${a.appUrl}/static/privacy" target="_blank">${a.translations.privacyPolicy}</a>
          </div>
          <div class="frt footer-links">
            <div class="fcol">
              <p class="df">&copy;. <a href="https://getfox.io" class="footer-link-getfox" target="">Getfox</a>. ${a.translations.rights}.<br/></p>
              <p class="frt">${a.translations.madeWith}\u2764\uFE0F${a.translations.forAll} <a class="footer-link-fox" href="https://gifts.worldwildlife.org/gift-center/gifts/species-adoptions/red-fox.aspx" target="_blank"> ${a.translations.foxes}</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;e.insertAdjacentHTML("beforeend",t)}};
//# sourceMappingURL=landingpage.js.map
