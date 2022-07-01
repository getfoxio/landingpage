"use strict";var b=Object.create;var p=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var h=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var $=(e,r,n,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of k(r))!y.call(e,i)&&i!==n&&p(e,i,{get:()=>r[i],enumerable:!(a=_(r,i))||a.enumerable});return e};var P=(e,r,n)=>(n=e!=null?b(v(e)):{},$(r||!e||!e.__esModule?p(n,"default",{value:e,enumerable:!0}):n,e));var m=h((E,u)=>{"use strict";var d=Object.defineProperty,w=Object.getOwnPropertyDescriptor,x=Object.getOwnPropertyNames,I=Object.prototype.hasOwnProperty,N=(e,r)=>{for(var n in r)d(e,n,{get:r[n],enumerable:!0})},U=(e,r,n,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of x(r))!I.call(e,i)&&i!==n&&d(e,i,{get:()=>r[i],enumerable:!(a=w(r,i))||a.enumerable});return e},C=e=>U(d({},"__esModule",{value:!0}),e),f={};N(f,{getfox:()=>t});u.exports=C(f);var t={landingpage:{__params__:{key:"",username:"",apiEndpoint:"https://api.getfox.io/api",build:!1},init:e=>new Promise((r,n)=>{t.landingpage.__params__.key=e.key,t.landingpage.__params__.username="",e.username&&(t.landingpage.__params__.username=e.username),t.landingpage.__params__.apiEndpoint="https://api.getfox.io/api",e.apiUrl&&(t.landingpage.__params__.apiEndpoint=e.apiUrl);let a=!1;e.build&&(a=e.build),t.landingpage.getUser().then(i=>{i&&(a&&(t.landingpage.build(i),console.log("getfox.landingpage.build()")),r(i))}).catch(i=>{n(i)})}),openLink:(e,r)=>{window.open(e,r!==3?"_blank":"_self")},getUser:(e=t.landingpage.__params__.username,r=t.landingpage.__params__.key)=>{let n=`{
    user(username: "${e}",apikey:"${r}") {
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
  }`;return t.landingpage.fetchApi(n).then(a=>{if(a.errors)return console.log("GetfoxAPI: ",a.errors[0].message),null;if(!a.errors)return a.data.user}).catch(a=>{console.log("GetfoxAPI: Unable to connect to API service.",a)})},userlinks:(e=t.landingpage.__params__.username,r=t.landingpage.__params__.key)=>{let n=`{
    userlinks(username:"${e}",apikey:"${r}"){     
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
  }`;return t.fetchApi(n).then(a=>{if(a.errors)throw new Error(a.errors[0].message);return a.data.userlinks})},fetchApi:e=>{let r={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})};return fetch(t.landingpage.__params__.apiEndpoint,r).then(n=>n.json())},build:e=>{let r=document.body,n=`
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
      ${e.links.length?`${e.links.map(a=>{let i="";a.background&&(i=a.background),a.thumbnail&&(i=a.thumbnail),!!a.product&&!!a.product.productImage1&&(i=a.product.productImage1),!!a.product&&!!a.product.productImage2&&(i=a.product.productImage2),!!a.product&&!!a.product.productImage3&&(i=a.product.productImage3),!!a.product&&!!a.product.productImage4&&(i=a.product.productImage4);let o="";return i&&(o=`<div class="link-resource-thumb" style="background-image:url(${e.appUrl}/${i});"></div>`),`<li 
                class="df flc frow landing_page__link-row ${a.isClickable?"landing_page__link-row--clickable":""} link-resource sortable-list__item with-thumb"
                ${a.isClickable?`onclick="javascript:getfox_lp.openLink('${a.path}', ${a.linkType})"`:""}
                >
                ${o}
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
  `;r.insertAdjacentHTML("beforeend",n)}}};window.getfox=t;window.getfox_lp=t.landingpage});var g=P(m());import l,{useState as M,useEffect as L}from"react";var A=({username:e,apiKey:r,apiEndpoint:n})=>{let[a,i]=M();return L(()=>{g.getfox.landingpage.init({key:r,username:e,apiUrl:n}).then(o=>{i(o)})},[]),l.createElement("div",{className:"landing-page__root"},a?l.createElement("div",{className:"user__root"},a.landingPage.fontFamily?l.createElement("style",null," font-family:$",a.landingPage.fontFamily,";"):null,l.createElement("div",{className:"profile-landingpage"},l.createElement("div",{className:"landing_page__background--overlay",style:{backgroundImage:a.landingPage.background?`url(${a.appUrl}/${a.landingPage.background})`:void 0,backgroundPosition:a.landingPage.background?a.landingPage.backgroundPosition:null,backgroundColor:a.landingPage.background?a.landingPage.backgroundColor:null}},l.createElement("div",{className:`fcol landing_page__header${a.landingPage.background?"":" no-background"}`,style:{backgroundImage:"linear-gradient(to bottom,"+a.landingPage.blendColor+", "+a.landingPage.blendColor.slice(0,7)+"00)"}},l.createElement("div",{className:"frow fc profiles-names"},a.profileImage?l.createElement("div",{className:"flc"},l.createElement("div",{className:"profile-image-overlay",style:{pointerEvents:"none"}},l.createElement("form",{className:"fc upload-profile-image"},l.createElement("div",{className:"fc profile-logo"},l.createElement("label",{className:"profile-logo-gfx",style:{backgroundImage:`url('${a.appUrl}/${a.profileImage}')`}})))),l.createElement("div",{className:"df flc landing_page__username"},l.createElement("a",{href:`${a.appUrl}/${a.username}`,style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},a.landingPage.title?a.landingPage.title:a.username))):null),l.createElement("div",{className:"df fl frow profiles-names-row landingpage__profiles-names-row"},a.socialMedia.instagramId&&a.socialMedia.instagramUsername?l.createElement("a",{href:`https://instagram.com/${a.socialMedia.instagramUsername}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},l.createElement("img",{src:`${a.appUrl}/static/images/ig-icon-black.svg`,alt:"instagram"})):null,a.socialMedia.facebookId&&a.socialMedia.facebookUrl?l.createElement("a",{href:`${a.socialMedia.facebookUrl}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},l.createElement("img",{src:`${a.appUrl}/static/images/fb-icon-black.svg`,alt:"facebook"})):null,a.socialMedia.twitterId&&a.socialMedia.twitterUrl?l.createElement("a",{href:`${a.socialMedia.twitterUrl}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},l.createElement("img",{src:`${a.appUrl}/static/images/twitter-icon-black.svg`,alt:"twitter"})):null)),l.createElement("div",{className:"fcol landing_page__content page-content--dashboard"},l.createElement("ul",{className:"landing_page__links-list sortable-list"},a.links.length?a.links.map(o=>{let s="";o.background&&(s=o.background),o.thumbnail&&(s=o.thumbnail),!!o.product&&!!o.product.productImage1&&(s=o.product.productImage1),!!o.product&&!!o.product.productImage2&&(s=o.product.productImage2),!!o.product&&!!o.product.productImage3&&(s=o.product.productImage3),!!o.product&&!!o.product.productImage4&&(s=o.product.productImage4);let c=l.createElement("div",null);return s&&(c=l.createElement("div",{className:"link-resource-thumb",style:{backgroundImage:`url(${a.appUrl}/${s})`}})),l.createElement("li",{key:o.id,className:`df flc frow landing_page__link-row ${o.isClickable?"landing_page__link-row--clickable":""} link-resource sortable-list__item with-thumb`,onClick:o.isClickable?()=>{g.getfox.landingpage.openLink(o.path,o.linkType)}:void 0},c,l.createElement("div",{className:"f1 fcol"},l.createElement("div",{className:"f1 fc"},o.name),o.product?l.createElement("div",{className:"f1 fc"},l.createElement("div",{className:"flc landingpage__shoplinkproduct-attributes"},l.createElement("span",{className:"product-label"},o.product.priceLabel==="onlynow"?a.translations.onlyNow:"",o.product.priceLabel==="sale"?a.translations.sale:"",o.product.priceLabel==="special"?a.translations.special:""),l.createElement("span",{className:"product-price"},o.product.price," ",o.product.currency),l.createElement("span",{className:"product-buy-now"},a.translations.buyNow))):null))}):l.createElement("div",{className:"fc"},a.translations.noLinksFound))),l.createElement("div",{className:"f1 frt copyright copyright-footer"},l.createElement("div",{className:"df frt footer-links"},l.createElement("a",{className:"footer-link",href:`${a.appUrl}/static/support`,target:"_blank"},a.translations.support),l.createElement("a",{className:"footer-link",href:`${a.appUrl}/static/privacy`,target:"_blank"},a.translations.privacyPolicy)),l.createElement("div",{className:"frt footer-links"},l.createElement("div",{className:"fcol"},l.createElement("p",{className:"df"},"\xA9."," ",l.createElement("a",{href:"https://getfox.io",className:"footer-link-getfox",target:""},"Getfox"),". ",a.translations.rights,".",l.createElement("br",null)),l.createElement("p",{className:"frt"},a.translations.madeWith,"\u2764\uFE0F",a.translations.forAll," ",l.createElement("a",{className:"footer-link-fox",href:"https://gifts.worldwildlife.org/gift-center/gifts/species-adoptions/red-fox.aspx",target:"_blank"}," ",a.translations.foxes),"."))))))):null)},j=A;export{j as LandingPage};
