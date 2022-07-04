"use strict";import e,{useState as g,useEffect as p}from"react";var o={landingpage:{__params__:{key:"",username:"",apiEndpoint:"https://api.getfox.io/graphql",build:!1,appUrl:"https://getfox.io"},init:i=>new Promise((n,t)=>{o.landingpage.__params__.key=i.key,o.landingpage.__params__.username="",i.username&&(o.landingpage.__params__.username=i.username),i.apiUrl&&(o.landingpage.__params__.apiEndpoint=i.apiUrl),!!i.build&&i.build&&console.warn("HTML template builder is unavailable in this version. Use version with HTML builder."),o.landingpage.getUser().then(a=>{a&&n(a)}).catch(a=>{t(a)})}),openLink:(i,n)=>{window.open(i,n!==3?"_blank":"_self")},getUser:(i=o.landingpage.__params__.username,n=o.landingpage.__params__.key)=>{let t=`{
    user(username: "${i}",apikey:"${n}") {
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
  }`;return o.landingpage.fetchApi(t).then(a=>{if(a.errors)return console.log("GetfoxAPI: ",a.errors[0].message),null;if(!a.errors)return a.data.user}).catch(a=>{console.log("GetfoxAPI: Unable to connect to API service.",a)})},fetchApi:i=>{let n={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:i})};return fetch(o.landingpage.__params__.apiEndpoint,n).then(t=>t.json())}}};window.getfox=o;window.getfox_lp=o.landingpage;var m=({username:i,apiKey:n,apiEndpoint:t})=>{let[a,c]=g(),[l,f]=g("https://getfox.io");return p(()=>{o.landingpage.init({key:n,username:i,apiUrl:t}).then(r=>{c(r)})},[]),p(()=>{a&&f(a.appUrl)},[a]),e.createElement("div",{className:"landing-page__root"},a&&l?e.createElement("div",{className:"user__root"},a.landingPage.fontFamily?e.createElement("style",null," font-family:$",a.landingPage.fontFamily,";"):null,e.createElement("div",{className:"profile-landingpage"},e.createElement("div",{className:"landing_page__background--overlay",style:{backgroundImage:a.landingPage.background?`url(${l}/${a.landingPage.background})`:void 0,backgroundPosition:a.landingPage.background?a.landingPage.backgroundPosition:null,backgroundColor:a.landingPage.background?a.landingPage.backgroundColor:null}},e.createElement("div",{className:`fcol landing_page__header${a.landingPage.background?"":" no-background"}`,style:{backgroundImage:"linear-gradient(to bottom,"+a.landingPage.blendColor+", "+a.landingPage.blendColor.slice(0,7)+"00)"}},e.createElement("div",{className:"frow fc profiles-names"},a.profileImage?e.createElement("div",{className:"flc"},e.createElement("div",{className:"profile-image-overlay",style:{pointerEvents:"none"}},e.createElement("form",{className:"fc upload-profile-image"},e.createElement("div",{className:"fc profile-logo"},e.createElement("label",{className:"profile-logo-gfx",style:{backgroundImage:`url('${l}/${a.profileImage}')`}})))),e.createElement("div",{className:"df flc landing_page__username"},e.createElement("a",{href:`${l}/${a.username}`,style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},a.landingPage.title?a.landingPage.title:a.username))):null),e.createElement("div",{className:"df fl frow profiles-names-row landingpage__profiles-names-row"},a.socialMedia.instagramId&&a.socialMedia.instagramUsername?e.createElement("a",{href:`https://instagram.com/${a.socialMedia.instagramUsername}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},e.createElement("img",{src:`${l}/static/images/ig-icon-black.svg`,alt:"instagram"})):null,a.socialMedia.facebookId&&a.socialMedia.facebookUrl?e.createElement("a",{href:`${a.socialMedia.facebookUrl}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},e.createElement("img",{src:`${l}/static/images/fb-icon-black.svg`,alt:"facebook"})):null,a.socialMedia.twitterId&&a.socialMedia.twitterUrl?e.createElement("a",{href:`${a.socialMedia.twitterUrl}`,target:"_blank",rel:"noreferrer",className:"fc profile-link--href profile-link--href-icon profile-link--href-ig",style:{color:a.landingPage.textColor?a.landingPage.textColor:null}},e.createElement("img",{src:`${l}/static/images/twitter-icon-black.svg`,alt:"twitter"})):null)),e.createElement("div",{className:"fcol landing_page__content page-content--dashboard"},e.createElement("ul",{className:"landing_page__links-list sortable-list"},a.links.length?a.links.map(r=>{let s="";r.background&&(s=r.background),r.thumbnail&&(s=r.thumbnail),!!r.product&&!!r.product.productImage1&&(s=r.product.productImage1),!!r.product&&!!r.product.productImage2&&(s=r.product.productImage2),!!r.product&&!!r.product.productImage3&&(s=r.product.productImage3),!!r.product&&!!r.product.productImage4&&(s=r.product.productImage4);let d=e.createElement("div",null);return s&&(d=e.createElement("div",{className:"link-resource-thumb",style:{backgroundImage:`url(${l}/${s})`}})),e.createElement("li",{key:r.id,className:`df flc frow landing_page__link-row ${r.isClickable?"landing_page__link-row--clickable":""} link-resource sortable-list__item with-thumb`,onClick:r.isClickable?()=>{o.landingpage.openLink(r.path,r.linkType)}:void 0},d,e.createElement("div",{className:"f1 fcol"},e.createElement("div",{className:"f1 fc"},r.name),r.product?e.createElement("div",{className:"f1 fc"},e.createElement("div",{className:"flc landingpage__shoplinkproduct-attributes"},e.createElement("span",{className:"product-label"},r.product.priceLabel==="onlynow"?a.translations.onlyNow:"",r.product.priceLabel==="sale"?a.translations.sale:"",r.product.priceLabel==="special"?a.translations.special:""),e.createElement("span",{className:"product-price"},r.product.price," ",r.product.currency),e.createElement("span",{className:"product-buy-now"},a.translations.buyNow))):null))}):e.createElement("div",{className:"fc"},a.translations.noLinksFound))),e.createElement("div",{className:"f1 frt copyright copyright-footer"},e.createElement("div",{className:"df frt footer-links"},e.createElement("a",{className:"footer-link",href:`${l}/static/support`,target:"_blank"},a.translations.support),e.createElement("a",{className:"footer-link",href:`${l}/static/privacy`,target:"_blank"},a.translations.privacyPolicy)),e.createElement("div",{className:"frt footer-links"},e.createElement("div",{className:"fcol"},e.createElement("p",{className:"df"},"\xA9."," ",e.createElement("a",{href:"https://getfox.io",className:"footer-link-getfox",target:""},"Getfox"),". ",a.translations.rights,".",e.createElement("br",null)),e.createElement("p",{className:"frt"},a.translations.madeWith,"\u2764\uFE0F",a.translations.forAll," ",e.createElement("a",{className:"footer-link-fox",href:"https://gifts.worldwildlife.org/gift-center/gifts/species-adoptions/red-fox.aspx",target:"_blank"}," ",a.translations.foxes),"."))))))):null)},u=m;export{u as LandingPage};
