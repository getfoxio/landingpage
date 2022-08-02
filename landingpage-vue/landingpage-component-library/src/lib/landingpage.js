"use strict";var r={landingpage:{__params__:{key:"",username:"",apiEndpoint:"https://api.getfox.io/graphql",build:!1,appUrl:"https://getfox.io"},init:e=>new Promise((n,a)=>{r.landingpage.__params__.key=e.key,r.landingpage.__params__.username="",e.username&&(r.landingpage.__params__.username=e.username),e.apiUrl&&(r.landingpage.__params__.apiEndpoint=e.apiUrl),!!e.build&&e.build&&console.warn("HTML template builder is unavailable in this version. Use version with HTML builder."),r.landingpage.getUser().then(t=>{t&&n(t)}).catch(t=>{a(t)})}),openLink:(e,n)=>{window.open(e,n!==3?"_blank":"_self")},getUser:(e=r.landingpage.__params__.username,n=r.landingpage.__params__.key)=>{let a=`{
    user(username: "${e}",apikey:"${n}") {
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
  }`;return r.landingpage.fetchApi(a).then(t=>{if(t.errors)return console.log("GetfoxAPI: ",t.errors[0].message),null;if(!t.errors)return t.data.user}).catch(t=>{console.log("GetfoxAPI: Unable to connect to API service.",t)})},fetchApi:e=>{let n={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})};return fetch(r.landingpage.__params__.apiEndpoint,n).then(a=>a.json())},copyLink:e=>{e.preventDefault(),e.stopPropagation();let n=e.currentTarget,a=n.dataset.clipboardText;if(!navigator.clipboard){r.landingpage.fallbackCopyTextToClipboard(n,a);return}navigator.clipboard.writeText(a).then(()=>{n.classList.add("js-copied"),setTimeout(()=>{n.classList.remove("js-copied")},300)},t=>{})},fallbackCopyTextToClipboard:(e,n)=>{let a=document.createElement("textarea");a.value=n,a.style.top="0",a.style.left="0",a.style.position="fixed",document.body.appendChild(a),a.focus(),a.select();try{document.execCommand("copy")&&(e.classList.add("js-copied"),setTimeout(()=>{e.classList.remove("js-copied")},300))}catch{}document.body.removeChild(a)}}};window.getfox=r;window.getfox_lp=r.landingpage;var i=r;export{i as default};
