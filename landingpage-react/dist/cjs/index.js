"use strict";var _=Object.create;var g=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var k=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var h=(i,l)=>{for(var n in l)g(i,n,{get:l[n],enumerable:!0})},c=(i,l,n,a)=>{if(l&&typeof l=="object"||typeof l=="function")for(let d of v(l))!y.call(i,d)&&d!==n&&g(i,d,{get:()=>l[d],enumerable:!(a=b(l,d))||a.enumerable});return i};var x=(i,l,n)=>(n=i!=null?_(k(i)):{},c(l||!i||!i.__esModule?g(n,"default",{value:i,enumerable:!0}):n,i)),N=i=>c(g({},"__esModule",{value:!0}),i);var w={};h(w,{LandingPage:()=>f});module.exports=N(w);var e=x(require("react"));var r={landingpage:{__params__:{key:"",username:"",apiEndpoint:"https://api.getfox.io/graphql",build:!1,appUrl:"https://getfox.io"},init:i=>new Promise((l,n)=>{r.landingpage.__params__.key=i.key,r.landingpage.__params__.username="",i.username&&(r.landingpage.__params__.username=i.username),i.apiUrl&&(r.landingpage.__params__.apiEndpoint=i.apiUrl),!!i.build&&i.build&&console.warn("HTML template builder is unavailable in this version. Use version with HTML builder."),r.landingpage.getUser().then(a=>{a&&l(a)}).catch(a=>{n(a)})}),openLink:(i,l)=>{window.open(i,l!==3?"_blank":"_self")},getUser:(i=r.landingpage.__params__.username,l=r.landingpage.__params__.key)=>{let n=`{
    user(username: "${i}",apikey:"${l}") {
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
  }`;return r.landingpage.fetchApi(n).then(a=>{if(a.errors)return console.log("GetfoxAPI: ",a.errors[0].message),null;if(!a.errors)return a.data.user}).catch(a=>{console.log("GetfoxAPI: Unable to connect to API service.",a)})},fetchApi:i=>{let l={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:i})};return fetch(r.landingpage.__params__.apiEndpoint,l).then(n=>n.json())},copyLink:i=>{i.preventDefault(),i.stopPropagation();let l=i.currentTarget,n=l.dataset.clipboardText;if(!navigator.clipboard){r.landingpage.fallbackCopyTextToClipboard(l,n);return}navigator.clipboard.writeText(n).then(()=>{l.classList.add("js-copied"),setTimeout(()=>{l.classList.remove("js-copied")},300)},a=>{})},fallbackCopyTextToClipboard:(i,l)=>{let n=document.createElement("textarea");n.value=l,n.style.top="0",n.style.left="0",n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{document.execCommand("copy")&&(i.classList.add("js-copied"),setTimeout(()=>{i.classList.remove("js-copied")},300))}catch{}document.body.removeChild(n)}}};window.getfox=r;window.getfox_lp=r.landingpage;var P=({username:i,apiKey:l,apiEndpoint:n})=>{let[a,d]=(0,e.useState)(),[t,m]=(0,e.useState)("https://getfox.io");return(0,e.useEffect)(()=>{r.landingpage.init({key:l,username:i,apiUrl:n}).then(o=>{d(o)})},[]),(0,e.useEffect)(()=>{a&&m(a.appUrl)},[a]),e.default.createElement("div",{className:"landing-page__root"},a&&t?e.default.createElement("div",{className:"user__root"},a.landingPage.fontFamily?e.default.createElement("style",null," font-family:$",a.landingPage.fontFamily,";"):null,e.default.createElement("div",{className:"profile-landingpage"},e.default.createElement("div",{className:"landing_page__background--overlay",style:{backgroundImage:a.landingPage.background?`url(${t}/${a.landingPage.background})`:void 0,backgroundPosition:a.landingPage.background?a.landingPage.backgroundPosition:null,backgroundColor:a.landingPage.background?a.landingPage.backgroundColor:null}},e.default.createElement("div",{className:`fcol landing_page__header${a.landingPage.background?"":" no-background"}`,style:{backgroundImage:"linear-gradient(to bottom,"+a.landingPage.blendColor+", "+a.landingPage.blendColor.slice(0,7)+"00)"}},e.default.createElement("div",{className:"frow fc profiles-names"},a.profileImage?e.default.createElement("div",{className:"flc"},e.default.createElement("div",{className:"profile-image-overlay",style:{pointerEvents:"none"}},e.default.createElement("form",{className:"fc upload-profile-image"},e.default.createElement("div",{className:"fc profile-logo"},e.default.createElement("label",{className:"profile-logo-gfx",style:{backgroundImage:`url('${t}/${a.profileImage}')`}})))),e.default.createElement("div",{className:"df flc landing_page__username"},e.default.createElement("a",{href:`${t}/${a.username}`,style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},a.landingPage.title?a.landingPage.title:a.username))):null),e.default.createElement("div",{className:"df fl frow profiles-names-row landingpage__profiles-names-row"},a.socialMedia.instagramId&&a.socialMedia.instagramUsername?e.default.createElement("a",{href:`https://instagram.com/${a.socialMedia.instagramUsername}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},e.default.createElement("img",{src:`${t}/static/images/ig-icon-black.svg`,alt:"instagram"})):null,a.socialMedia.facebookId&&a.socialMedia.facebookUrl?e.default.createElement("a",{href:`${a.socialMedia.facebookUrl}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},e.default.createElement("img",{src:`${t}/static/images/fb-icon-black.svg`,alt:"facebook"})):null,a.socialMedia.twitterId&&a.socialMedia.twitterUrl?e.default.createElement("a",{href:`${a.socialMedia.twitterUrl}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},e.default.createElement("img",{src:`${t}/static/images/twitter-icon-black.svg`,alt:"twitter"})):null),a.landingPage.description?e.default.createElement("div",{className:"frow fc landing_page__introtext--wrap"},e.default.createElement("div",{className:"f1 landing_page__introtext",style:{color:a.landingPage.textDescriptionColor?a.landingPage.textDescriptionColor:null}},a.landingPage.description)):null),e.default.createElement("div",{className:"fcol landing_page__content page-content--dashboard"},e.default.createElement("ul",{className:"landing_page__links-list sortable-list"},a.links.length?a.links.map(o=>{let s="";o.background&&(s=o.background),o.thumbnail&&(s=o.thumbnail),!!o.product&&!!o.product.productImage1&&(s=o.product.productImage1),!!o.product&&!!o.product.productImage2&&(s=o.product.productImage2),!!o.product&&!!o.product.productImage3&&(s=o.product.productImage3),!!o.product&&!!o.product.productImage4&&(s=o.product.productImage4);let p=e.default.createElement("div",null);return s&&(p=e.default.createElement("div",{className:"link-resource-thumb",style:{backgroundImage:`url(${t}/${s})`}})),e.default.createElement("li",{key:o.id,className:`df flc frow landing_page__link-row ${o.isClickable?"landing_page__link-row--clickable":""} link-resource sortable-list__item with-thumb`,onClick:o.isClickable?()=>{r.landingpage.openLink(o.path,o.linkType)}:void 0},p,e.default.createElement("div",{className:"f1 fcol"},e.default.createElement("div",{className:"f1 fc links-list__link-text"},o.name),o.product?e.default.createElement("div",{className:"f1 fc"},e.default.createElement("div",{className:"flc landingpage__shoplinkproduct-attributes"},e.default.createElement("span",{className:"links-list__link-text product-label"},o.product.priceLabel==="onlynow"?a.translations.onlyNow:"",o.product.priceLabel==="sale"?a.translations.sale:"",o.product.priceLabel==="special"?a.translations.special:""),e.default.createElement("span",{className:"links-list__link-text product-price"},o.product.price," ",o.product.currency),e.default.createElement("span",{className:"links-list__link-text product-buy-now"},a.translations.buyNow))):null),e.default.createElement("div",{className:"flc landingpage__copy-link","aria-label":a.translations.buyNow,"data-microtip-position":"bottom",role:"tooltip","data-clipboard-text":`${t}/${a.username}/${o.linkUrl}`,onClick:u=>{r.landingpage.copyLink(u)}},e.default.createElement("svg",{x:"0px",y:"0px",width:"24px",height:"24px",viewBox:"0 0 24 24"},e.default.createElement("path",{fill:"#ddd",d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}))))}):e.default.createElement("div",{className:"fc"},a.translations.noLinksFound))),e.default.createElement("div",{className:"f1 frt copyright copyright-footer"},e.default.createElement("div",{className:"df frt footer-links"},e.default.createElement("a",{className:"footer-link",href:`${t}/static/support`,target:"_blank"},a.translations.support),e.default.createElement("a",{className:"footer-link",href:`${t}/static/privacy`,target:"_blank"},a.translations.privacyPolicy)),e.default.createElement("div",{className:"frt footer-links"},e.default.createElement("div",{className:"fcol"},e.default.createElement("p",{className:"df"},"\xA9."," ",e.default.createElement("a",{href:"https://getfox.io",className:"footer-link-getfox",target:""},"Getfox"),". ",a.translations.rights,".",e.default.createElement("br",null)),e.default.createElement("p",{className:"frt"},a.translations.madeWith,"\u2764\uFE0F",a.translations.forAll," ",e.default.createElement("a",{className:"footer-link-fox",href:"https://gifts.worldwildlife.org/gift-center/gifts/species-adoptions/red-fox.aspx",target:"_blank"}," ",a.translations.foxes),"."))))))):null)},f=P;
