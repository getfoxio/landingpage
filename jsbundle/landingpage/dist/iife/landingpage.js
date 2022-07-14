"use strict";(()=>{var e={landingpage:{__params__:{key:"",username:"",apiEndpoint:"https://api.getfox.io/graphql",build:!1,appUrl:"https://getfox.io"},build:a=>new Promise((o,t)=>{e.landingpage.__params__.key=a.key,e.landingpage.__params__.username="",a.username&&(e.landingpage.__params__.username=a.username),a.apiUrl&&(e.landingpage.__params__.apiEndpoint=a.apiUrl);let i=!0;a.build&&(i=a.build),e.landingpage.getUser().then(l=>{l&&(i&&e.landingpage.buildHtml(l),o(l))}).catch(l=>{t(l)})}),openLink:(a,o)=>{window.open(a,o!==3?"_blank":"_self")},getUser:(a=e.landingpage.__params__.username,o=e.landingpage.__params__.key)=>{let t=`{
    user(username: "${a}",apikey:"${o}") {
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
  }`;return e.landingpage.fetchApi(t).then(i=>{if(i.errors)return console.log("GetfoxAPI: ",i.errors[0].message),null;if(!i.errors)return i.data.user}).catch(i=>{console.log("GetfoxAPI: Unable to connect to API service.",i)})},fetchApi:a=>{let o={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:a})};return fetch(e.landingpage.__params__.apiEndpoint,o).then(t=>t.json())},copyLink:a=>{a.preventDefault(),a.stopPropagation();let o=a.currentTarget,t=o.dataset.clipboardText;if(!navigator.clipboard){e.landingpage.fallbackCopyTextToClipboard(o,t);return}navigator.clipboard.writeText(t).then(()=>{o.classList.add("js-copied"),setTimeout(()=>{o.classList.remove("js-copied")},300)},i=>{})},fallbackCopyTextToClipboard:(a,o)=>{let t=document.createElement("textarea");t.value=o,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")&&(a.classList.add("js-copied"),setTimeout(()=>{a.classList.remove("js-copied")},300))}catch(i){}document.body.removeChild(t)},buildHtml:a=>{let o=document.body,t=`
    ${a.landingPage.fontFamily?`
    <style>
      .profile-landingpage * {
        font-family:${a.landingPage.fontFamily};
      } 
    </style>
    `:""}
    <div class="profile-landingpage">
      <div class="landing_page__background--overlay" style="
      ${a.landingPage.background?`background-image:url(${e.landingpage.__params__.appUrl}/${a.landingPage.background});`:""}
      ${a.landingPage.backgroundPosition?`background-position:${a.landingPage.backgroundPosition};`:""}
      ${a.landingPage.backgroundColor?`background-color:${a.landingPage.backgroundColor};`:""}
      "
      >
      <div class="fcol landing_page__header${a.landingPage.background?"":" no-background"}"
        style="${a.landingPage.blendColor?`background-image: linear-gradient(to bottom, ${a.landingPage.blendColor}, ${a.landingPage.blendColor.slice(0,7)}00);`:""}"
      >
        <div class="frow fc profiles-names">
        ${a.profileImage?`
          <div class="profile-image-overlay" style="pointer-events: none;">
            <form class="fc upload-profile-image">
              <div class="fc profile-logo">
                <label
                  class="profile-logo-gfx"
                  style="background-image: url('${e.landingpage.__params__.appUrl}/${a.profileImage}');"
                >
              </div>
            </form>
          </div>
          <div class="df flc landing_page__username">
          <a href="${e.landingpage.__params__.appUrl}/${a.username}" style="${a.landingPage.textColor?`color:${a.landingPage.textColor};`:""}">
              ${a.landingPage.title?a.landingPage.title:a.username}
              </a>
          </div>
        `:""}
        ${a.landingPage.description?`
            <div class="frow fc landing_page__introtext--wrap">
              <div class="f1 landing_page__introtext"
              style="${a.landingPage.textDescriptionColor?`color:${a.landingPage.textDescriptionColor};`:""}">
              ${a.landingPage.description}
              </div>
            </div>
            `:""}
        </div>
        <div class="df fl frow profiles-names-row landingpage__profiles-names-row">
        ${a.socialMedia.instagramId&&a.socialMedia.instagramUsername?`
          <a
          href="https://instagram.com/${a.socialMedia.instagramUsername}"
          target="_blank"
          class="fc profile-link--href profile-link--href-icon profile-link--href-ig"
          style="${a.landingPage.textColor?`color: ${a.landingPage.textColor};`:""}"
        >
          <img src="${e.landingpage.__params__.appUrl}/static/images/ig-icon-black.svg" alt="instagram" />
        </a>
        `:""}
        ${a.socialMedia.facebookId&&a.socialMedia.facebookUrl?`
          <a
          href="${a.socialMedia.facebookUrl}"
          target="_blank"
          class="fc profile-link--href profile-link--href-icon profile-link--href-ig"
          style="${a.landingPage.textColor?`color: ${a.landingPage.textColor};`:""}"
        >
          <img src="${e.landingpage.__params__.appUrl}/static/images/fb-icon-black.svg" alt="facebook" />
        </a>
        `:""}
        ${a.socialMedia.twitterId&&a.socialMedia.twitterUrl?`
          <a
          href="${a.socialMedia.twitterUrl}" }}"
          target="_blank"
          class="fc profile-link--href profile-link--href-icon profile-link--href-ig"
          style="${a.landingPage.textColor?`color: ${a.landingPage.textColor};`:""}"
        >
          <img src="${e.landingpage.__params__.appUrl}/static/images/twitter-icon-black.svg" alt="twitter" />
        </a>
        `:""}
        </div>
        ${a.landingPage.description?`
          <div class="frow fc landing_page__introtext--wrap">
            <div class="f1 landing_page__introtext"
            style="${a.landingPage.textDescriptionColor?`color: ${a.landingPage.textDescriptionColor};`:""}">${a.landingPage.description}</div>
        </div>
        `:""}
      </div>
      <div class="fcol landing_page__content page-content--dashboard">
      <ul class="landing_page__links-list sortable-list">
      ${a.links.length?`${a.links.map(i=>{let l="";i.background&&(l=i.background),i.thumbnail&&(l=i.thumbnail),!!i.product&&!!i.product.productImage1&&(l=i.product.productImage1),!!i.product&&!!i.product.productImage2&&(l=i.product.productImage2),!!i.product&&!!i.product.productImage3&&(l=i.product.productImage3),!!i.product&&!!i.product.productImage4&&(l=i.product.productImage4);let n="";return l&&(n=`<div class="link-resource-thumb" style="background-image:url(${e.landingpage.__params__.appUrl}/${l});"></div>`),`<li 
                class="df flc frow landing_page__link-row ${i.isClickable?"landing_page__link-row--clickable":""} link-resource sortable-list__item with-thumb"
                ${i.isClickable?`onclick="javascript:getfox_lp.openLink('${i.path}', ${i.linkType})"`:""}
                >
                ${n}
                <a class="f1 fcol">
                  <div class="f1 fc links-list__link-text">${i.name}</div>
                  ${i.product?`
                  <div class="f1 fc">   
                    <div class="flc landingpage__shoplinkproduct-attributes">
                      <span class="links-list__link-text product-label">
                        ${i.product.priceLabel==="onlynow"?a.translations.onlyNow:""}
                        ${i.product.priceLabel==="sale"?a.translations.sale:""}
                        ${i.product.priceLabel==="special"?a.translations.special:""}
                      </span>
                      <span class="links-list__link-text product-price">${i.product.price} ${i.product.currency}</span> 
                      <span class="links-list__link-text product-buy-now">${a.translations.buyNow}</span>
                    </div>
                  </div>
                  `:""}
                </a>
                <div class="flc landingpage__copy-link" aria-label="${a.translations.copyLink}" data-microtip-position="bottom" role="tooltip"
                data-clipboard-text="
                ${e.landingpage.__params__.appUrl}/${a.username}/${i.linkUrl}"
                onClick="javascript:getfox_lp.copyLink()"
                >
                  <svg x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24">
                    <path fill="#ddd" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
                  </svg>
                </div>
          </li>`}).join("")}
      `:`
        <div class="fc">${a.translations.noLinksFound}</div>
      `}
        </ul>
        </div>
        <div class="f1 frt copyright copyright-footer">
          <div class="df frt footer-links">
            <a class="footer-link" href="${e.landingpage.__params__.appUrl}/static/support" target="_blank">${a.translations.support}</a>
            <a class="footer-link" href="${e.landingpage.__params__.appUrl}/static/privacy" target="_blank">${a.translations.privacyPolicy}</a>
          </div>
          <div class="frt footer-links">
            <div class="fcol">
              <p class="df">&copy;. <a href="https://getfox.io" class="footer-link-getfox" target="">Getfox</a>. ${a.translations.rights}.<br/></p>
              <p class="frt">${a.translations.madeWith}\u2764\uFE0F${a.translations.forAll} <a class="footer-link-fox" href="https://gifts.worldwildlife.org/gift-center/gifts/species-adoptions/red-fox.aspx" target="_blank"> ${a.translations.foxes}</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;o.insertAdjacentHTML("beforeend",t)}}};window.getfox=e;window.getfox_lp=e.landingpage;})();
