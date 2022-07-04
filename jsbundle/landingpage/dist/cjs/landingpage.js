"use strict";var o=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var g=(e,a)=>{for(var i in a)o(e,i,{get:a[i],enumerable:!0})},d=(e,a,i,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let t of s(a))!p.call(e,t)&&t!==i&&o(e,t,{get:()=>a[t],enumerable:!(n=l(a,t))||n.enumerable});return e};var c=e=>d(o({},"__esModule",{value:!0}),e);var u={};g(u,{getfox:()=>r});module.exports=c(u);var r={landingpage:{__params__:{key:"",username:"",apiEndpoint:"https://api.getfox.io/graphql",build:!1,appUrl:"https://getfox.io"},init:e=>new Promise((a,i)=>{r.landingpage.__params__.key=e.key,r.landingpage.__params__.username="",e.username&&(r.landingpage.__params__.username=e.username),e.apiUrl&&(r.landingpage.__params__.apiEndpoint=e.apiUrl),!!e.build&&e.build&&console.warn("HTML template builder is unavailable in this version. Use version with HTML builder."),r.landingpage.getUser().then(n=>{n&&a(n)}).catch(n=>{i(n)})}),openLink:(e,a)=>{window.open(e,a!==3?"_blank":"_self")},getUser:(e=r.landingpage.__params__.username,a=r.landingpage.__params__.key)=>{let i=`{
    user(username: "${e}",apikey:"${a}") {
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
  }`;return r.landingpage.fetchApi(i).then(n=>{if(n.errors)return console.log("GetfoxAPI: ",n.errors[0].message),null;if(!n.errors)return n.data.user}).catch(n=>{console.log("GetfoxAPI: Unable to connect to API service.",n)})},fetchApi:e=>{let a={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})};return fetch(r.landingpage.__params__.apiEndpoint,a).then(i=>i.json())}}};window.getfox=r;window.getfox_lp=r.landingpage;
