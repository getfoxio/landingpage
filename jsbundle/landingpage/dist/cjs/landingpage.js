"use strict";var o=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var c=(e,a)=>{for(var n in a)o(e,n,{get:a[n],enumerable:!0})},d=(e,a,n,t)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of l(a))!p.call(e,i)&&i!==n&&o(e,i,{get:()=>a[i],enumerable:!(t=s(a,i))||t.enumerable});return e};var g=e=>d(o({},"__esModule",{value:!0}),e);var u={};c(u,{getfox:()=>r});module.exports=g(u);var r={landingpage:{__params__:{key:"",username:"",apiEndpoint:"https://api.getfox.io/graphql",build:!1,appUrl:"https://getfox.io"},init:e=>new Promise((a,n)=>{r.landingpage.__params__.key=e.key,r.landingpage.__params__.username="",e.username&&(r.landingpage.__params__.username=e.username),e.apiUrl&&(r.landingpage.__params__.apiEndpoint=e.apiUrl),!!e.build&&e.build&&console.warn("HTML template builder is unavailable in this version. Use version with HTML builder."),r.landingpage.getUser().then(t=>{t&&a(t)}).catch(t=>{n(t)})}),openLink:(e,a)=>{window.open(e,a!==3?"_blank":"_self")},getUser:(e=r.landingpage.__params__.username,a=r.landingpage.__params__.key)=>{let n=`{
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
        copyLink
      }
    }
  }`;return r.landingpage.fetchApi(n).then(t=>{if(t.errors)return console.log("GetfoxAPI: ",t.errors[0].message),null;if(!t.errors)return t.data.user}).catch(t=>{console.log("GetfoxAPI: Unable to connect to API service.",t)})},fetchApi:e=>{let a={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})};return fetch(r.landingpage.__params__.apiEndpoint,a).then(n=>n.json())},copyLink:e=>{e.preventDefault(),e.stopPropagation();let a=e.currentTarget,n=a.dataset.clipboardText;if(!navigator.clipboard){r.landingpage.fallbackCopyTextToClipboard(a,n);return}navigator.clipboard.writeText(n).then(()=>{a.classList.add("js-copied"),setTimeout(()=>{a.classList.remove("js-copied")},300)},t=>{})},fallbackCopyTextToClipboard:(e,a)=>{let n=document.createElement("textarea");n.value=a,n.style.top="0",n.style.left="0",n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{document.execCommand("copy")&&(e.classList.add("js-copied"),setTimeout(()=>{e.classList.remove("js-copied")},300))}catch{}document.body.removeChild(n)}}};window.getfox=r;window.getfox_lp=r.landingpage;
