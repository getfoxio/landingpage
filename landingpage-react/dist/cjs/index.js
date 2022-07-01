"use strict";var m=Object.create;var g=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var k=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var h=(e,o)=>{for(var t in o)g(e,t,{get:o[t],enumerable:!0})},c=(e,o,t,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let n of b(o))!v.call(e,n)&&n!==t&&g(e,n,{get:()=>o[n],enumerable:!(a=_(o,n))||a.enumerable});return e};var y=(e,o,t)=>(t=e!=null?m(k(e)):{},c(o||!e||!e.__esModule?g(t,"default",{value:e,enumerable:!0}):t,e)),$=e=>c(g({},"__esModule",{value:!0}),e);var x={};h(x,{LandingPage:()=>f});module.exports=$(x);var l=y(require("react"));var r={landingpage:{__params__:{key:"",username:"",apiEndpoint:"https://api.getfox.io/graphql",build:!1,appUrl:"getfox.io"},init:e=>new Promise((o,t)=>{r.landingpage.__params__.key=e.key,r.landingpage.__params__.username="",e.username&&(r.landingpage.__params__.username=e.username),e.apiUrl&&(r.landingpage.__params__.apiEndpoint=e.apiUrl);let a=!1;e.build&&(a=e.build),r.landingpage.getUser().then(n=>{n&&(a&&(r.landingpage.build(n),console.log("getfox.landingpage.build()")),o(n))}).catch(n=>{t(n)})}),openLink:(e,o)=>{window.open(e,o!==3?"_blank":"_self")},getUser:(e=r.landingpage.__params__.username,o=r.landingpage.__params__.key)=>{let t=`{
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
  }`;return r.landingpage.fetchApi(t).then(a=>{if(a.errors)return console.log("GetfoxAPI: ",a.errors[0].message),null;if(!a.errors)return a.data.user.appUrl.includes("none")||(r.landingpage.__params__.appUrl=a.data.user.appUrl),a.data.user}).catch(a=>{console.log("GetfoxAPI: Unable to connect to API service.",a)})},userlinks:(e=r.landingpage.__params__.username,o=r.landingpage.__params__.key)=>{let t=`{
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
  }`;return r.fetchApi(t).then(a=>{if(a.errors)throw new Error(a.errors[0].message);return a.data.userlinks})},fetchApi:e=>{let o={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})};return fetch(r.landingpage.__params__.apiEndpoint,o).then(t=>t.json())},build:e=>{let o=document.body,t=`
    ${e.landingPage.fontFamily?`
    <style>
      .profile-landingpage * {
        font-family:${e.landingPage.fontFamily};
      } 
    </style>
    `:""}
    <div class="profile-landingpage">
      <div class="landing_page__background--overlay" style="
      ${e.landingPage.background?`background-image:url(${r.landingpage.__params__.appUrl}/${e.landingPage.background});`:""}
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
                  style="background-image: url('${r.landingpage.__params__.appUrl}/${e.profileImage}');"
                >
              </div>
            </form>
          </div>
          <div class="df flc landing_page__username">
          <a href="${r.landingpage.__params__.appUrl}/${e.username}" style="${e.landingPage.textColor?`color:${e.landingPage.textColor};`:""}">
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
          <img src="${r.landingpage.__params__.appUrl}/static/images/ig-icon-black.svg" alt="instagram" />
        </a>
        `:""}
        ${e.socialMedia.facebookId&&e.socialMedia.facebookUrl?`
          <a
          href="${e.socialMedia.facebookUrl}"
          target="_blank"
          class="fc profile-link--href profile-link--href-icon profile-link--href-ig"
          style="${e.landingPage.textColor?`color: ${e.landingPage.textColor};`:""}"
        >
          <img src="${r.landingpage.__params__.appUrl}/static/images/fb-icon-black.svg" alt="facebook" />
        </a>
        `:""}
        ${e.socialMedia.twitterId&&e.socialMedia.twitterUrl?`
          <a
          href="${e.socialMedia.twitterUrl}" }}"
          target="_blank"
          class="fc profile-link--href profile-link--href-icon profile-link--href-ig"
          style="${e.landingPage.textColor?`color: ${e.landingPage.textColor};`:""}"
        >
          <img src="${r.landingpage.__params__.appUrl}/static/images/twitter-icon-black.svg" alt="twitter" />
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
      ${e.links.length?`${e.links.map(a=>{let n="";a.background&&(n=a.background),a.thumbnail&&(n=a.thumbnail),!!a.product&&!!a.product.productImage1&&(n=a.product.productImage1),!!a.product&&!!a.product.productImage2&&(n=a.product.productImage2),!!a.product&&!!a.product.productImage3&&(n=a.product.productImage3),!!a.product&&!!a.product.productImage4&&(n=a.product.productImage4);let s="";return n&&(s=`<div class="link-resource-thumb" style="background-image:url(${r.landingpage.__params__.appUrl}/${n});"></div>`),`<li 
                class="df flc frow landing_page__link-row ${a.isClickable?"landing_page__link-row--clickable":""} link-resource sortable-list__item with-thumb"
                ${a.isClickable?`onclick="javascript:getfox_lp.openLink('${a.path}', ${a.linkType})"`:""}
                >
                ${s}
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
            <a class="footer-link" href="${r.landingpage.__params__.appUrl}/static/support" target="_blank">${e.translations.support}</a>
            <a class="footer-link" href="${r.landingpage.__params__.appUrl}/static/privacy" target="_blank">${e.translations.privacyPolicy}</a>
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
  `;o.insertAdjacentHTML("beforeend",t)}}};window.getfox=r;window.getfox_lp=r.landingpage;var P=({username:e,apiKey:o,apiEndpoint:t})=>{let[a,n]=(0,l.useState)(),[s,u]=(0,l.useState)("https://getfox.io");return(0,l.useEffect)(()=>{r.landingpage.init({key:o,username:e,apiUrl:t}).then(i=>{n(i)})},[]),(0,l.useEffect)(()=>{a&&!a.appUrl.includes("None")&&(console.log("update",a.appUrl),u(a.appUrl))},[a]),l.default.createElement("div",{className:"landing-page__root"},a&&s?l.default.createElement("div",{className:"user__root"},a.landingPage.fontFamily?l.default.createElement("style",null," font-family:$",a.landingPage.fontFamily,";"):null,l.default.createElement("div",{className:"profile-landingpage"},l.default.createElement("div",{className:"landing_page__background--overlay",style:{backgroundImage:a.landingPage.background?`url(${s}/${a.landingPage.background})`:void 0,backgroundPosition:a.landingPage.background?a.landingPage.backgroundPosition:null,backgroundColor:a.landingPage.background?a.landingPage.backgroundColor:null}},l.default.createElement("div",{className:`fcol landing_page__header${a.landingPage.background?"":" no-background"}`,style:{backgroundImage:"linear-gradient(to bottom,"+a.landingPage.blendColor+", "+a.landingPage.blendColor.slice(0,7)+"00)"}},l.default.createElement("div",{className:"frow fc profiles-names"},a.profileImage?l.default.createElement("div",{className:"flc"},l.default.createElement("div",{className:"profile-image-overlay",style:{pointerEvents:"none"}},l.default.createElement("form",{className:"fc upload-profile-image"},l.default.createElement("div",{className:"fc profile-logo"},l.default.createElement("label",{className:"profile-logo-gfx",style:{backgroundImage:`url('${s}/${a.profileImage}')`}})))),l.default.createElement("div",{className:"df flc landing_page__username"},l.default.createElement("a",{href:`${s}/${a.username}`,style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},a.landingPage.title?a.landingPage.title:a.username))):null),l.default.createElement("div",{className:"df fl frow profiles-names-row landingpage__profiles-names-row"},a.socialMedia.instagramId&&a.socialMedia.instagramUsername?l.default.createElement("a",{href:`https://instagram.com/${a.socialMedia.instagramUsername}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},l.default.createElement("img",{src:`${s}/static/images/ig-icon-black.svg`,alt:"instagram"})):null,a.socialMedia.facebookId&&a.socialMedia.facebookUrl?l.default.createElement("a",{href:`${a.socialMedia.facebookUrl}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},l.default.createElement("img",{src:`${s}/static/images/fb-icon-black.svg`,alt:"facebook"})):null,a.socialMedia.twitterId&&a.socialMedia.twitterUrl?l.default.createElement("a",{href:`${a.socialMedia.twitterUrl}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},l.default.createElement("img",{src:`${s}/static/images/twitter-icon-black.svg`,alt:"twitter"})):null)),l.default.createElement("div",{className:"fcol landing_page__content page-content--dashboard"},l.default.createElement("ul",{className:"landing_page__links-list sortable-list"},a.links.length?a.links.map(i=>{let d="";i.background&&(d=i.background),i.thumbnail&&(d=i.thumbnail),!!i.product&&!!i.product.productImage1&&(d=i.product.productImage1),!!i.product&&!!i.product.productImage2&&(d=i.product.productImage2),!!i.product&&!!i.product.productImage3&&(d=i.product.productImage3),!!i.product&&!!i.product.productImage4&&(d=i.product.productImage4);let p=l.default.createElement("div",null);return d&&(p=l.default.createElement("div",{className:"link-resource-thumb",style:{backgroundImage:`url(${s}/${d})`}})),l.default.createElement("li",{key:i.id,className:`df flc frow landing_page__link-row ${i.isClickable?"landing_page__link-row--clickable":""} link-resource sortable-list__item with-thumb`,onClick:i.isClickable?()=>{r.landingpage.openLink(i.path,i.linkType)}:void 0},p,l.default.createElement("div",{className:"f1 fcol"},l.default.createElement("div",{className:"f1 fc"},i.name),i.product?l.default.createElement("div",{className:"f1 fc"},l.default.createElement("div",{className:"flc landingpage__shoplinkproduct-attributes"},l.default.createElement("span",{className:"product-label"},i.product.priceLabel==="onlynow"?a.translations.onlyNow:"",i.product.priceLabel==="sale"?a.translations.sale:"",i.product.priceLabel==="special"?a.translations.special:""),l.default.createElement("span",{className:"product-price"},i.product.price," ",i.product.currency),l.default.createElement("span",{className:"product-buy-now"},a.translations.buyNow))):null))}):l.default.createElement("div",{className:"fc"},a.translations.noLinksFound))),l.default.createElement("div",{className:"f1 frt copyright copyright-footer"},l.default.createElement("div",{className:"df frt footer-links"},l.default.createElement("a",{className:"footer-link",href:`${s}/static/support`,target:"_blank"},a.translations.support),l.default.createElement("a",{className:"footer-link",href:`${s}/static/privacy`,target:"_blank"},a.translations.privacyPolicy)),l.default.createElement("div",{className:"frt footer-links"},l.default.createElement("div",{className:"fcol"},l.default.createElement("p",{className:"df"},"\xA9."," ",l.default.createElement("a",{href:"https://getfox.io",className:"footer-link-getfox",target:""},"Getfox"),". ",a.translations.rights,".",l.default.createElement("br",null)),l.default.createElement("p",{className:"frt"},a.translations.madeWith,"\u2764\uFE0F",a.translations.forAll," ",l.default.createElement("a",{className:"footer-link-fox",href:"https://gifts.worldwildlife.org/gift-center/gifts/species-adoptions/red-fox.aspx",target:"_blank"}," ",a.translations.foxes),"."))))))):null)},f=P;
