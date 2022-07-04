"use strict";var u=Object.create;var g=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty;var h=(r,o)=>{for(var l in o)g(r,l,{get:o[l],enumerable:!0})},c=(r,o,l,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let d of _(o))!k.call(r,d)&&d!==l&&g(r,d,{get:()=>o[d],enumerable:!(a=b(o,d))||a.enumerable});return r};var y=(r,o,l)=>(l=r!=null?u(v(r)):{},c(o||!r||!r.__esModule?g(l,"default",{value:r,enumerable:!0}):l,r)),N=r=>c(g({},"__esModule",{value:!0}),r);var w={};h(w,{LandingPage:()=>f});module.exports=N(w);var e=y(require("react"));var n={landingpage:{__params__:{key:"",username:"",apiEndpoint:"https://api.getfox.io/graphql",build:!1,appUrl:"https://getfox.io"},init:r=>new Promise((o,l)=>{n.landingpage.__params__.key=r.key,n.landingpage.__params__.username="",r.username&&(n.landingpage.__params__.username=r.username),r.apiUrl&&(n.landingpage.__params__.apiEndpoint=r.apiUrl),!!r.build&&r.build&&console.warn("HTML template builder is unavailable in this version. Use version with HTML builder."),n.landingpage.getUser().then(a=>{a&&o(a)}).catch(a=>{l(a)})}),openLink:(r,o)=>{window.open(r,o!==3?"_blank":"_self")},getUser:(r=n.landingpage.__params__.username,o=n.landingpage.__params__.key)=>{let l=`{
    user(username: "${r}",apikey:"${o}") {
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
  }`;return n.landingpage.fetchApi(l).then(a=>{if(a.errors)return console.log("GetfoxAPI: ",a.errors[0].message),null;if(!a.errors)return a.data.user}).catch(a=>{console.log("GetfoxAPI: Unable to connect to API service.",a)})},fetchApi:r=>{let o={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:r})};return fetch(n.landingpage.__params__.apiEndpoint,o).then(l=>l.json())}}};window.getfox=n;window.getfox_lp=n.landingpage;var P=({username:r,apiKey:o,apiEndpoint:l})=>{let[a,d]=(0,e.useState)(),[s,m]=(0,e.useState)("https://getfox.io");return(0,e.useEffect)(()=>{n.landingpage.init({key:o,username:r,apiUrl:l}).then(i=>{d(i)})},[]),(0,e.useEffect)(()=>{a&&m(a.appUrl)},[a]),e.default.createElement("div",{className:"landing-page__root"},a&&s?e.default.createElement("div",{className:"user__root"},a.landingPage.fontFamily?e.default.createElement("style",null," font-family:$",a.landingPage.fontFamily,";"):null,e.default.createElement("div",{className:"profile-landingpage"},e.default.createElement("div",{className:"landing_page__background--overlay",style:{backgroundImage:a.landingPage.background?`url(${s}/${a.landingPage.background})`:void 0,backgroundPosition:a.landingPage.background?a.landingPage.backgroundPosition:null,backgroundColor:a.landingPage.background?a.landingPage.backgroundColor:null}},e.default.createElement("div",{className:`fcol landing_page__header${a.landingPage.background?"":" no-background"}`,style:{backgroundImage:"linear-gradient(to bottom,"+a.landingPage.blendColor+", "+a.landingPage.blendColor.slice(0,7)+"00)"}},e.default.createElement("div",{className:"frow fc profiles-names"},a.profileImage?e.default.createElement("div",{className:"flc"},e.default.createElement("div",{className:"profile-image-overlay",style:{pointerEvents:"none"}},e.default.createElement("form",{className:"fc upload-profile-image"},e.default.createElement("div",{className:"fc profile-logo"},e.default.createElement("label",{className:"profile-logo-gfx",style:{backgroundImage:`url('${s}/${a.profileImage}')`}})))),e.default.createElement("div",{className:"df flc landing_page__username"},e.default.createElement("a",{href:`${s}/${a.username}`,style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},a.landingPage.title?a.landingPage.title:a.username))):null),e.default.createElement("div",{className:"df fl frow profiles-names-row landingpage__profiles-names-row"},a.socialMedia.instagramId&&a.socialMedia.instagramUsername?e.default.createElement("a",{href:`https://instagram.com/${a.socialMedia.instagramUsername}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},e.default.createElement("img",{src:`${s}/static/images/ig-icon-black.svg`,alt:"instagram"})):null,a.socialMedia.facebookId&&a.socialMedia.facebookUrl?e.default.createElement("a",{href:`${a.socialMedia.facebookUrl}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},e.default.createElement("img",{src:`${s}/static/images/fb-icon-black.svg`,alt:"facebook"})):null,a.socialMedia.twitterId&&a.socialMedia.twitterUrl?e.default.createElement("a",{href:`${a.socialMedia.twitterUrl}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},e.default.createElement("img",{src:`${s}/static/images/twitter-icon-black.svg`,alt:"twitter"})):null)),e.default.createElement("div",{className:"fcol landing_page__content page-content--dashboard"},e.default.createElement("ul",{className:"landing_page__links-list sortable-list"},a.links.length?a.links.map(i=>{let t="";i.background&&(t=i.background),i.thumbnail&&(t=i.thumbnail),!!i.product&&!!i.product.productImage1&&(t=i.product.productImage1),!!i.product&&!!i.product.productImage2&&(t=i.product.productImage2),!!i.product&&!!i.product.productImage3&&(t=i.product.productImage3),!!i.product&&!!i.product.productImage4&&(t=i.product.productImage4);let p=e.default.createElement("div",null);return t&&(p=e.default.createElement("div",{className:"link-resource-thumb",style:{backgroundImage:`url(${s}/${t})`}})),e.default.createElement("li",{key:i.id,className:`df flc frow landing_page__link-row ${i.isClickable?"landing_page__link-row--clickable":""} link-resource sortable-list__item with-thumb`,onClick:i.isClickable?()=>{n.landingpage.openLink(i.path,i.linkType)}:void 0},p,e.default.createElement("div",{className:"f1 fcol"},e.default.createElement("div",{className:"f1 fc"},i.name),i.product?e.default.createElement("div",{className:"f1 fc"},e.default.createElement("div",{className:"flc landingpage__shoplinkproduct-attributes"},e.default.createElement("span",{className:"product-label"},i.product.priceLabel==="onlynow"?a.translations.onlyNow:"",i.product.priceLabel==="sale"?a.translations.sale:"",i.product.priceLabel==="special"?a.translations.special:""),e.default.createElement("span",{className:"product-price"},i.product.price," ",i.product.currency),e.default.createElement("span",{className:"product-buy-now"},a.translations.buyNow))):null))}):e.default.createElement("div",{className:"fc"},a.translations.noLinksFound))),e.default.createElement("div",{className:"f1 frt copyright copyright-footer"},e.default.createElement("div",{className:"df frt footer-links"},e.default.createElement("a",{className:"footer-link",href:`${s}/static/support`,target:"_blank"},a.translations.support),e.default.createElement("a",{className:"footer-link",href:`${s}/static/privacy`,target:"_blank"},a.translations.privacyPolicy)),e.default.createElement("div",{className:"frt footer-links"},e.default.createElement("div",{className:"fcol"},e.default.createElement("p",{className:"df"},"\xA9."," ",e.default.createElement("a",{href:"https://getfox.io",className:"footer-link-getfox",target:""},"Getfox"),". ",a.translations.rights,".",e.default.createElement("br",null)),e.default.createElement("p",{className:"frt"},a.translations.madeWith,"\u2764\uFE0F",a.translations.forAll," ",e.default.createElement("a",{className:"footer-link-fox",href:"https://gifts.worldwildlife.org/gift-center/gifts/species-adoptions/red-fox.aspx",target:"_blank"}," ",a.translations.foxes),"."))))))):null)},f=P;
