"use strict";var t=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var c=Object.prototype.hasOwnProperty;var d=(a,n)=>{for(var o in n)t(a,o,{get:n[o],enumerable:!0})},p=(a,n,o,e)=>{if(n&&typeof n=="object"||typeof n=="function")for(let l of s(n))!c.call(a,l)&&l!==o&&t(a,l,{get:()=>n[l],enumerable:!(e=g(n,l))||e.enumerable});return a};var f=a=>p(t({},"__esModule",{value:!0}),a);var _={};d(_,{getfox:()=>i});module.exports=f(_);var i={landingpage:{__params__:{key:"",username:"",apiEndpoint:"https://api.getfox.io/graphql",build:!1,appUrl:"https://getfox.io"},init:a=>new Promise((n,o)=>{i.landingpage.__params__.key=a.key,i.landingpage.__params__.username="",a.username&&(i.landingpage.__params__.username=a.username),a.apiUrl&&(i.landingpage.__params__.apiEndpoint=a.apiUrl);let e=!1;a.build&&(e=a.build),i.landingpage.getUser().then(l=>{l&&(e&&i.landingpage.build(l),n(l))}).catch(l=>{o(l)})}),openLink:(a,n)=>{window.open(a,n!==3?"_blank":"_self")},getUser:(a=i.landingpage.__params__.username,n=i.landingpage.__params__.key)=>{let o=`{
    user(username: "${a}",apikey:"${n}") {
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
  }`;return i.landingpage.fetchApi(o).then(e=>{if(e.errors)return console.log("GetfoxAPI: ",e.errors[0].message),null;if(!e.errors)return e.data.user.appUrl.includes("None")||(i.landingpage.__params__.appUrl=e.data.user.appUrl),e.data.user}).catch(e=>{console.log("GetfoxAPI: Unable to connect to API service.",e)})},userlinks:(a=i.landingpage.__params__.username,n=i.landingpage.__params__.key)=>{let o=`{
    userlinks(username:"${a}",apikey:"${n}"){     
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
  }`;return i.fetchApi(o).then(e=>{if(e.errors)throw new Error(e.errors[0].message);return e.data.userlinks})},fetchApi:a=>{let n={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:a})};return fetch(i.landingpage.__params__.apiEndpoint,n).then(o=>o.json())},build:a=>{let n=document.body,o=`
    ${a.landingPage.fontFamily?`
    <style>
      .profile-landingpage * {
        font-family:${a.landingPage.fontFamily};
      } 
    </style>
    `:""}
    <div class="profile-landingpage">
      <div class="landing_page__background--overlay" style="
      ${a.landingPage.background?`background-image:url(${i.landingpage.__params__.appUrl}/${a.landingPage.background});`:""}
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
                  style="background-image: url('${i.landingpage.__params__.appUrl}/${a.profileImage}');"
                >
              </div>
            </form>
          </div>
          <div class="df flc landing_page__username">
          <a href="${i.landingpage.__params__.appUrl}/${a.username}" style="${a.landingPage.textColor?`color:${a.landingPage.textColor};`:""}">
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
          <img src="${i.landingpage.__params__.appUrl}/static/images/ig-icon-black.svg" alt="instagram" />
        </a>
        `:""}
        ${a.socialMedia.facebookId&&a.socialMedia.facebookUrl?`
          <a
          href="${a.socialMedia.facebookUrl}"
          target="_blank"
          class="fc profile-link--href profile-link--href-icon profile-link--href-ig"
          style="${a.landingPage.textColor?`color: ${a.landingPage.textColor};`:""}"
        >
          <img src="${i.landingpage.__params__.appUrl}/static/images/fb-icon-black.svg" alt="facebook" />
        </a>
        `:""}
        ${a.socialMedia.twitterId&&a.socialMedia.twitterUrl?`
          <a
          href="${a.socialMedia.twitterUrl}" }}"
          target="_blank"
          class="fc profile-link--href profile-link--href-icon profile-link--href-ig"
          style="${a.landingPage.textColor?`color: ${a.landingPage.textColor};`:""}"
        >
          <img src="${i.landingpage.__params__.appUrl}/static/images/twitter-icon-black.svg" alt="twitter" />
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
      ${a.links.length?`${a.links.map(e=>{let l="";e.background&&(l=e.background),e.thumbnail&&(l=e.thumbnail),!!e.product&&!!e.product.productImage1&&(l=e.product.productImage1),!!e.product&&!!e.product.productImage2&&(l=e.product.productImage2),!!e.product&&!!e.product.productImage3&&(l=e.product.productImage3),!!e.product&&!!e.product.productImage4&&(l=e.product.productImage4);let r="";return l&&(r=`<div class="link-resource-thumb" style="background-image:url(${i.landingpage.__params__.appUrl}/${l});"></div>`),`<li 
                class="df flc frow landing_page__link-row ${e.isClickable?"landing_page__link-row--clickable":""} link-resource sortable-list__item with-thumb"
                ${e.isClickable?`onclick="javascript:getfox_lp.openLink('${e.path}', ${e.linkType})"`:""}
                >
                ${r}
                <a class="f1 fcol">
                  <div class="f1 fc">${e.name}</div>
                  ${e.product?`
                  <div class="f1 fc">   
                    <div class="flc landingpage__shoplinkproduct-attributes">
                      <span class="product-label">
                        ${e.product.priceLabel==="onlynow"?a.translations.onlyNow:""}
                        ${e.product.priceLabel==="sale"?a.translations.sale:""}
                        ${e.product.priceLabel==="special"?a.translations.special:""}
                      </span>
                      <span class="product-price">${e.product.price} ${e.product.currency}</span> 
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
            <a class="footer-link" href="${i.landingpage.__params__.appUrl}/static/support" target="_blank">${a.translations.support}</a>
            <a class="footer-link" href="${i.landingpage.__params__.appUrl}/static/privacy" target="_blank">${a.translations.privacyPolicy}</a>
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
  `;n.insertAdjacentHTML("beforeend",o)}}};window.getfox=i;window.getfox_lp=i.landingpage;
