"use strict";var s=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var u=(e,o)=>{for(var n in o)s(e,n,{get:o[n],enumerable:!0})},b=(e,o,n,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let l of f(o))!m.call(e,l)&&l!==n&&s(e,l,{get:()=>o[l],enumerable:!(a=p(o,l))||a.enumerable});return e};var _=e=>b(s({},"__esModule",{value:!0}),e);var y={};u(y,{LandingPage:()=>g});module.exports=_(y);var c=require("react");var r={__params__:{key:"",username:"",apiEndpoint:"https://api.getfox.io/api",build:!1},init:e=>new Promise((o,n)=>{r.__params__.key=e.key,r.__params__.username="",e.username&&(r.__params__.username=e.username),r.__params__.apiEndpoint="https://api.getfox.io/api",e.apiUrl&&(r.__params__.apiEndpoint=e.apiUrl);let a=!0;e.build&&(a=e.build),r.getUser().then(l=>{l&&(a&&r.build(l),o(l))}).catch(l=>{n(l)})}),openLink:(e,o)=>{window.open(e,o!==3?"_blank":"_self")},getUser:(e=r.__params__.username,o=r.__params__.key)=>{let n=`{
    user(username: "${e}",apikey:"${o}") {
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
  }`;return r.fetchApi(n).then(a=>{if(a.errors)return console.log("GetfoxAPI: ",a.errors[0].message),null;if(!a.errors)return a.data.user}).catch(a=>{console.log("GetfoxAPI: Unable to connect to API service.",a)})},userlinks:(e=r.__params__.username,o=r.__params__.key)=>{let n=`{
    userlinks(username:"${e}",apikey:"${o}"){     
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
  }`;return r.fetchApi(n).then(a=>{if(a.errors)throw new Error(a.errors[0].message);return a.data.userlinks})},fetchApi:e=>{let o={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})};return fetch(r.__params__.apiEndpoint,o).then(n=>n.json())},build:e=>{let o=document.body,n=`
    ${e.landingPage.fontFamily?`
    <style>
      .profile-landingpage * {
        font-family:${e.landingPage.fontFamily};
      } 
    </style>
    `:""}
    <div class="profile-landingpage">
      <div class="landing_page__background--overlay" style="
      ${e.landingPage.background?`background-image:url(${e.appUrl}/${e.landingPage.background});`:""}
      ${e.landingPage.backgroundPosition?`background-position:${e.landingPage.backgroundPosition};`:""}
      ${e.landingPage.backgroundColor?`background-color:${e.landingPage.backgroundColor};`:""}
      "
      >
      <div class="fcol landing_page__header${e.landingPage.background?"":" no-background"}"
        style="${e.landingPage.blendColor?`background-image: linear-gradient(to bottom, ${e.landingPage.blendColor}, ${e.landingPage.blendColor.slice(0,7)}00);`:""}"
      >
        <div class="frow fc profiles-names">
        ${e.profileImage?`
          <div class="profile-image-overlay" style="pointer-events: none;">
            <form class="fc upload-profile-image">
              <div class="fc profile-logo">
                <label
                  class="profile-logo-gfx"
                  style="background-image: url('${e.appUrl}/${e.profileImage}');"
                >
              </div>
            </form>
          </div>
          <div class="df flc landing_page__username">
          <a href="${e.appUrl}/${e.username}" style="${e.landingPage.textColor?`color:${e.landingPage.textColor};`:""}">
              ${e.landingPage.title?e.landingPage.title:e.username}
              </a>
          </div>
        `:""}
        </div>
        <div class="df fl frow profiles-names-row landingpage__profiles-names-row">
        ${e.socialMedia.instagramId&&e.socialMedia.instagramUsername?`
          <a
          href="https://instagram.com/${e.socialMedia.instagramUsername}"
          target="_blank"
          class="fc profile-link--href profile-link--href-icon profile-link--href-ig"
          style="${e.landingPage.textColor?`color: ${e.landingPage.textColor};`:""}"
        >
          <img src="${e.appUrl}/static/images/ig-icon-black.svg" alt="instagram" />
        </a>
        `:""}
        ${e.socialMedia.facebookId&&e.socialMedia.facebookUrl?`
          <a
          href="${e.socialMedia.facebookUrl}"
          target="_blank"
          class="fc profile-link--href profile-link--href-icon profile-link--href-ig"
          style="${e.landingPage.textColor?`color: ${e.landingPage.textColor};`:""}"
        >
          <img src="${e.appUrl}/static/images/fb-icon-black.svg" alt="facebook" />
        </a>
        `:""}
        ${e.socialMedia.twitterId&&e.socialMedia.twitterUrl?`
          <a
          href="${e.socialMedia.twitterUrl}" }}"
          target="_blank"
          class="fc profile-link--href profile-link--href-icon profile-link--href-ig"
          style="${e.landingPage.textColor?`color: ${e.landingPage.textColor};`:""}"
        >
          <img src="${e.appUrl}/static/images/twitter-icon-black.svg" alt="twitter" />
        </a>
        `:""}
        </div>
        ${e.landingPage.description?`
          <div class="frow fc landing_page__introtext--wrap">
            <div class="f1 landing_page__introtext"
            style="${e.landingPage.textDescriptionColor?`color: ${e.landingPage.textDescriptionColor};`:""}">${e.landingPage.description}</div>
        </div>
        `:""}
      </div>
      <div class="fcol landing_page__content page-content--dashboard">
      <ul class="landing_page__links-list sortable-list">
      ${e.links.length?`${e.links.map(a=>{let l="";a.background&&(l=a.background),a.thumbnail&&(l=a.thumbnail),!!a.product&&!!a.product.productImage1&&(l=a.product.productImage1),!!a.product&&!!a.product.productImage2&&(l=a.product.productImage2),!!a.product&&!!a.product.productImage3&&(l=a.product.productImage3),!!a.product&&!!a.product.productImage4&&(l=a.product.productImage4);let i="";return l&&(i=`<div class="link-resource-thumb" style="background-image:url(${e.appUrl}/${l});"></div>`),`<li 
                class="df flc frow landing_page__link-row ${a.isClickable?"landing_page__link-row--clickable":""} link-resource sortable-list__item with-thumb"
                ${a.isClickable?`onclick="javascript:getfox.openLink('${a.path}', ${a.linkType})"`:""}
                >
                ${i}
                <a class="f1 fcol">
                  <div class="f1 fc">${a.name}</div>
                  ${a.product?`
                  <div class="f1 fc">   
                    <div class="flc landingpage__shoplinkproduct-attributes">
                      <span class="product-label">
                        ${a.product.priceLabel==="onlynow"?e.translations.onlyNow:""}
                        ${a.product.priceLabel==="sale"?e.translations.sale:""}
                        ${a.product.priceLabel==="special"?e.translations.special:""}
                      </span>
                      <span class="product-price">${a.product.price} ${a.product.currency}</span> 
                      <span class="product-buy-now">${e.translations.buyNow}</span>
                    </div>
                  </div>
                  `:""}
                </a>
          </li>`}).join("")}
      `:`
        <div class="fc">${e.translations.noLinksFound}</div>
      `}
        </ul>
        </div>
        <div class="f1 frt copyright copyright-footer">
          <div class="df frt footer-links">
            <a class="footer-link" href="${e.appUrl}/static/support" target="_blank">${e.translations.support}</a>
            <a class="footer-link" href="${e.appUrl}/static/privacy" target="_blank">${e.translations.privacyPolicy}</a>
          </div>
          <div class="frt footer-links">
            <div class="fcol">
              <p class="df">&copy;. <a href="https://getfox.io" class="footer-link-getfox" target="">Getfox</a>. ${e.translations.rights}.<br/></p>
              <p class="frt">${e.translations.madeWith}\u2764\uFE0F${e.translations.forAll} <a class="footer-link-fox" href="https://gifts.worldwildlife.org/gift-center/gifts/species-adoptions/red-fox.aspx" target="_blank"> ${e.translations.foxes}</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;o.insertAdjacentHTML("beforeend",n)}};var v=({username:e,apiKey:o,apiEndpoint:n})=>{let[a,l]=(0,c.useState)({});return(0,c.useEffect)(()=>{r.init({key:o,username:e,apiUrl:n,build:!1}).then(i=>{l(i)})},[]),React.createElement("div",null,a?React.createElement("div",null,a.landingPage.fontFamily?React.createElement("style",null,"font-family:$",a.landingPage.fontFamily,";"):null,React.createElement("div",{className:"profile-landingpage"},React.createElement("div",{className:"landing_page__background--overlay",style:{backgroundImage:a.landingPage.background?`url(${a.appUrl}/${a.landingPage.background})`:void 0,backgroundPosition:a.landingPage.background?a.landingPage.backgroundPosition:null,backgroundColor:a.landingPage.background?a.landingPage.backgroundColor:null}},React.createElement("div",{className:`fcol landing_page__header${a.landingPage.background?"":" no-background"}`,style:{backgroundImage:"linear-gradient(to bottom,"+a.landingPage.blendColor+", "+a.landingPage.blendColor.slice(0,7)+"00)"}},React.createElement("div",{className:"frow fc profiles-names"},a.profileImage?React.createElement("div",{className:"flc"},React.createElement("div",{className:"profile-image-overlay",style:{pointerEvents:"none"}},React.createElement("form",{className:"fc upload-profile-image"},React.createElement("div",{className:"fc profile-logo"},React.createElement("label",{className:"profile-logo-gfx",style:{backgroundImage:`url('${a.appUrl}/${a.profileImage}')`}})))),React.createElement("div",{className:"df flc landing_page__username"},React.createElement("a",{href:`${a.appUrl}/${a.username}`,style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},a.landingPage.title?a.landingPage.title:a.username))):null),React.createElement("div",{className:"df fl frow profiles-names-row landingpage__profiles-names-row"},a.socialMedia.instagramId&&a.socialMedia.instagramUsername?React.createElement("a",{href:`https://instagram.com/${a.socialMedia.instagramUsername}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},React.createElement("img",{src:`${a.appUrl}/static/images/ig-icon-black.svg`,alt:"instagram"})):null,a.socialMedia.facebookId&&a.socialMedia.facebookUrl?React.createElement("a",{href:`https://instagram.com/${a.socialMedia.facebookUrl}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},React.createElement("img",{src:`${a.appUrl}/static/images/fb-icon-black.svg`,alt:"facebook"})):null,a.socialMedia.twitterId&&a.socialMedia.twitterUrl?React.createElement("a",{href:`https://instagram.com/${a.socialMedia.twitterUrl}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},React.createElement("img",{src:`${a.appUrl}/static/images/twitter-icon-black.svg`,alt:"twitter"})):null)),React.createElement("div",{className:"fcol landing_page__content page-content--dashboard"},React.createElement("ul",{className:"landing_page__links-list sortable-list"},a.links.length?a.links.map(i=>{let t="";i.background&&(t=i.background),i.thumbnail&&(t=i.thumbnail),!!i.product&&!!i.product.productImage1&&(t=i.product.productImage1),!!i.product&&!!i.product.productImage2&&(t=i.product.productImage2),!!i.product&&!!i.product.productImage3&&(t=i.product.productImage3),!!i.product&&!!i.product.productImage4&&(t=i.product.productImage4);let d=React.createElement("div",null);return t&&(d=React.createElement("div",{className:"link-resource-thumb",style:{backgroundImage:`url(${a.appUrl}/${t})`}})),React.createElement("li",{key:i.id,className:`df flc frow landing_page__link-row ${i.isClickable?"landing_page__link-row--clickable":""} link-resource sortable-list__item with-thumb`,onClick:i.isClickable?()=>{r.openLink(i.path,i.linkType)}:void 0},d,React.createElement("div",{className:"f1 fcol"},React.createElement("div",{className:"f1 fc"},i.name),i.product?React.createElement("div",{className:"f1 fc"},React.createElement("div",{className:"flc landingpage__shoplinkproduct-attributes"},React.createElement("span",{className:"product-label"},i.product.priceLabel==="onlynow"?a.translations.onlyNow:"",i.product.priceLabel==="sale"?a.translations.sale:"",i.product.priceLabel==="special"?a.translations.special:""),React.createElement("span",{className:"product-price"},i.product.price," ",i.product.currency),React.createElement("span",{className:"product-buy-now"},a.translations.buyNow))):null))}):React.createElement("div",{className:"fc"},a.translations.noLinksFound)))))):React.createElement("p",null,"Loading.."))},g=v;
//# sourceMappingURL=index.js.map
