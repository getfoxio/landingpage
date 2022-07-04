"use strict";(()=>{var n={landingpage:{__params__:{key:"",username:"",apiEndpoint:"https://api.getfox.io/graphql",build:!1,appUrl:"https://getfox.io"},init:e=>new Promise((r,i)=>{n.landingpage.__params__.key=e.key,n.landingpage.__params__.username="",e.username&&(n.landingpage.__params__.username=e.username),e.apiUrl&&(n.landingpage.__params__.apiEndpoint=e.apiUrl),!!e.build&&e.build&&console.warn("HTML template builder is unavailable in this version. Use version with HTML builder."),n.landingpage.getUser().then(a=>{a&&r(a)}).catch(a=>{i(a)})}),openLink:(e,r)=>{window.open(e,r!==3?"_blank":"_self")},getUser:(e=n.landingpage.__params__.username,r=n.landingpage.__params__.key)=>{let i=`{
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
  }`;return n.landingpage.fetchApi(i).then(a=>{if(a.errors)return console.log("GetfoxAPI: ",a.errors[0].message),null;if(!a.errors)return a.data.user}).catch(a=>{console.log("GetfoxAPI: Unable to connect to API service.",a)})},fetchApi:e=>{let r={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})};return fetch(n.landingpage.__params__.apiEndpoint,r).then(i=>i.json())}}};window.getfox=n;window.getfox_lp=n.landingpage;})();
