"use strict";import e,{useState as g,useEffect as p}from"react";var r={landingpage:{__params__:{key:"",username:"",apiEndpoint:"https://api.getfox.io/graphql",build:!1,appUrl:"https://getfox.io"},init:o=>new Promise((n,l)=>{r.landingpage.__params__.key=o.key,r.landingpage.__params__.username="",o.username&&(r.landingpage.__params__.username=o.username),o.apiUrl&&(r.landingpage.__params__.apiEndpoint=o.apiUrl),!!o.build&&o.build&&console.warn("HTML template builder is unavailable in this version. Use version with HTML builder."),r.landingpage.getUser().then(a=>{a&&n(a)}).catch(a=>{l(a)})}),openLink:(o,n)=>{window.open(o,n!==3?"_blank":"_self")},getUser:(o=r.landingpage.__params__.username,n=r.landingpage.__params__.key)=>{let l=`{
    user(username: "${o}",apikey:"${n}") {
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
  }`;return r.landingpage.fetchApi(l).then(a=>{if(a.errors)return console.log("GetfoxAPI: ",a.errors[0].message),null;if(!a.errors)return a.data.user}).catch(a=>{console.log("GetfoxAPI: Unable to connect to API service.",a)})},fetchApi:o=>{let n={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:o})};return fetch(r.landingpage.__params__.apiEndpoint,n).then(l=>l.json())},copyLink:o=>{o.preventDefault(),o.stopPropagation();let n=o.currentTarget,l=n.dataset.clipboardText;if(!navigator.clipboard){r.landingpage.fallbackCopyTextToClipboard(n,l);return}navigator.clipboard.writeText(l).then(()=>{n.classList.add("js-copied"),setTimeout(()=>{n.classList.remove("js-copied")},300)},a=>{})},fallbackCopyTextToClipboard:(o,n)=>{let l=document.createElement("textarea");l.value=n,l.style.top="0",l.style.left="0",l.style.position="fixed",document.body.appendChild(l),l.focus(),l.select();try{document.execCommand("copy")&&(o.classList.add("js-copied"),setTimeout(()=>{o.classList.remove("js-copied")},300))}catch{}document.body.removeChild(l)}}};window.getfox=r;window.getfox_lp=r.landingpage;var u=({username:o,apiKey:n,apiEndpoint:l})=>{let[a,c]=g(),[t,f]=g("https://getfox.io");return p(()=>{r.landingpage.init({key:n,username:o,apiUrl:l}).then(i=>{c(i)})},[]),p(()=>{a&&f(a.appUrl)},[a]),e.createElement("div",{className:"landing-page__root"},a&&t?e.createElement("div",{className:"user__root"},a.landingPage.fontFamily?e.createElement("style",null," font-family:$",a.landingPage.fontFamily,";"):null,e.createElement("div",{className:"profile-landingpage"},e.createElement("div",{className:"landing_page__background--overlay",style:{backgroundImage:a.landingPage.background?`url(${t}/${a.landingPage.background})`:void 0,backgroundPosition:a.landingPage.background?a.landingPage.backgroundPosition:null,backgroundColor:a.landingPage.background?a.landingPage.backgroundColor:null}},e.createElement("div",{className:`fcol landing_page__header${a.landingPage.background?"":" no-background"}`,style:{backgroundImage:"linear-gradient(to bottom,"+a.landingPage.blendColor+", "+a.landingPage.blendColor.slice(0,7)+"00)"}},e.createElement("div",{className:"frow fc profiles-names"},a.profileImage?e.createElement("div",{className:"flc"},e.createElement("div",{className:"profile-image-overlay",style:{pointerEvents:"none"}},e.createElement("form",{className:"fc upload-profile-image"},e.createElement("div",{className:"fc profile-logo"},e.createElement("label",{className:"profile-logo-gfx",style:{backgroundImage:`url('${t}/${a.profileImage}')`}})))),e.createElement("div",{className:"df flc landing_page__username"},e.createElement("a",{href:`${t}/${a.username}`,style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},a.landingPage.title?a.landingPage.title:a.username))):null),e.createElement("div",{className:"df fl frow profiles-names-row landingpage__profiles-names-row"},a.socialMedia.instagramId&&a.socialMedia.instagramUsername?e.createElement("a",{href:`https://instagram.com/${a.socialMedia.instagramUsername}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},e.createElement("img",{src:`${t}/static/images/ig-icon-black.svg`,alt:"instagram"})):null,a.socialMedia.facebookId&&a.socialMedia.facebookUrl?e.createElement("a",{href:`${a.socialMedia.facebookUrl}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},e.createElement("img",{src:`${t}/static/images/fb-icon-black.svg`,alt:"facebook"})):null,a.socialMedia.twitterId&&a.socialMedia.twitterUrl?e.createElement("a",{href:`${a.socialMedia.twitterUrl}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},e.createElement("img",{src:`${t}/static/images/twitter-icon-black.svg`,alt:"twitter"})):null),a.landingPage.description?e.createElement("div",{className:"frow fc landing_page__introtext--wrap"},e.createElement("div",{className:"f1 landing_page__introtext",style:{color:a.landingPage.textDescriptionColor?a.landingPage.textDescriptionColor:null}},a.landingPage.description)):null),e.createElement("div",{className:"fcol landing_page__content page-content--dashboard"},e.createElement("ul",{className:"landing_page__links-list sortable-list"},a.links.length?a.links.map(i=>{let s="";i.background&&(s=i.background),i.thumbnail&&(s=i.thumbnail),!!i.product&&!!i.product.productImage1&&(s=i.product.productImage1),!!i.product&&!!i.product.productImage2&&(s=i.product.productImage2),!!i.product&&!!i.product.productImage3&&(s=i.product.productImage3),!!i.product&&!!i.product.productImage4&&(s=i.product.productImage4);let d=e.createElement("div",null);return s&&(d=e.createElement("div",{className:"link-resource-thumb",style:{backgroundImage:`url(${t}/${s})`}})),e.createElement("li",{key:i.id,className:`df flc frow landing_page__link-row ${i.isClickable?"landing_page__link-row--clickable":""} link-resource sortable-list__item with-thumb`,onClick:i.isClickable?()=>{r.landingpage.openLink(i.path,i.linkType)}:void 0},d,e.createElement("div",{className:"f1 fcol"},e.createElement("div",{className:"f1 fc links-list__link-text"},i.name),i.product?e.createElement("div",{className:"f1 fc"},e.createElement("div",{className:"flc landingpage__shoplinkproduct-attributes"},e.createElement("span",{className:"links-list__link-text product-label"},i.product.priceLabel==="onlynow"?a.translations.onlyNow:"",i.product.priceLabel==="sale"?a.translations.sale:"",i.product.priceLabel==="special"?a.translations.special:""),e.createElement("span",{className:"links-list__link-text product-price"},i.product.price," ",i.product.currency),e.createElement("span",{className:"links-list__link-text product-buy-now"},a.translations.buyNow))):null),e.createElement("div",{className:"flc landingpage__copy-link","aria-label":a.translations.buyNow,"data-microtip-position":"bottom",role:"tooltip","data-clipboard-text":`${t}/${a.username}/${i.linkUrl}`,onClick:m=>{r.landingpage.copyLink(m)}},e.createElement("svg",{x:"0px",y:"0px",width:"24px",height:"24px",viewBox:"0 0 24 24"},e.createElement("path",{fill:"#ddd",d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}))))}):e.createElement("div",{className:"fc"},a.translations.noLinksFound))),e.createElement("div",{className:"f1 frt copyright copyright-footer"},e.createElement("div",{className:"df frt footer-links"},e.createElement("a",{className:"footer-link",href:`${t}/static/support`,target:"_blank"},a.translations.support),e.createElement("a",{className:"footer-link",href:`${t}/static/privacy`,target:"_blank"},a.translations.privacyPolicy)),e.createElement("div",{className:"frt footer-links"},e.createElement("div",{className:"fcol"},e.createElement("p",{className:"df"},"\xA9."," ",e.createElement("a",{href:"https://getfox.io",className:"footer-link-getfox",target:""},"Getfox"),". ",a.translations.rights,".",e.createElement("br",null)),e.createElement("p",{className:"frt"},a.translations.madeWith,"\u2764\uFE0F",a.translations.forAll," ",e.createElement("a",{className:"footer-link-fox",href:"https://gifts.worldwildlife.org/gift-center/gifts/species-adoptions/red-fox.aspx",target:"_blank"}," ",a.translations.foxes),"."))))))):null)},_=u;export{_ as LandingPage};
