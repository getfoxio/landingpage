import { openBlock, createElementBlock, Fragment, createCommentVNode, normalizeStyle, createElementVNode, normalizeClass, toDisplayString, renderList, createTextVNode } from 'vue';

var r={landingpage:{__params__:{key:"",username:"",apiEndpoint:"https://localhost:9080/graphql/",build:!1,appUrl:"https://localhost:8080"},init:e=>new Promise((n,a)=>{r.landingpage.__params__.key=e.key,r.landingpage.__params__.username="",e.username&&(r.landingpage.__params__.username=e.username),e.apiUrl&&(r.landingpage.__params__.apiEndpoint=e.apiUrl),!!e.build&&e.build&&console.warn("HTML template builder is unavailable in this version. Use version with HTML builder."),r.landingpage.getUser().then(t=>{t&&n(t);}).catch(t=>{a(t);});}),openLink:(e,n)=>{window.open(e,n!==3?"_blank":"_self");},getUser:(e=r.landingpage.__params__.username,n=r.landingpage.__params__.key)=>{let a=`{
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
  }`;return r.landingpage.fetchApi(a).then(t=>{if(t.errors)return console.log("GetfoxAPI: ",t.errors[0].message),null;if(!t.errors)return t.data.user}).catch(t=>{console.log("GetfoxAPI: Unable to connect to API service.",t);})},fetchApi:e=>{let n={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})};return fetch(r.landingpage.__params__.apiEndpoint,n).then(a=>a.json())},copyLink:e=>{e.preventDefault(),e.stopPropagation();let n=e.currentTarget,a=n.dataset.clipboardText;if(!navigator.clipboard){r.landingpage.fallbackCopyTextToClipboard(n,a);return}navigator.clipboard.writeText(a).then(()=>{n.classList.add("js-copied"),setTimeout(()=>{n.classList.remove("js-copied");},300);},t=>{});},fallbackCopyTextToClipboard:(e,n)=>{let a=document.createElement("textarea");a.value=n,a.style.top="0",a.style.left="0",a.style.position="fixed",document.body.appendChild(a),a.focus(),a.select();try{document.execCommand("copy")&&(e.classList.add("js-copied"),setTimeout(()=>{e.classList.remove("js-copied");},300));}catch{}document.body.removeChild(a);}}};window.getfox=r;window.getfox_lp=r.landingpage;var i=r;

var script = {
  name: 'LandingPage',
  props: {
    username: String,
    apikey: String,
  },
  data: () => ({
    user: null,
    year: new Date().getFullYear(),
  }),

  created() {
    this.fetchData();
  },
  watch: {
    currentBranch: 'fetchData',
  },

  methods: {
    async fetchData() {
      i.landingpage
        .init({
          key: this.apikey,
          username: this.username,
        })
        .then((dataUser) => {
          this.user = dataUser;
        });
    },
    truncate(v) {
      const newline = v.indexOf('\n');
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate(v) {
      return v.replace(/T|Z/g, ' ')
    },
    getLinkImageSource(link) {
      let linkImageSource = '';
      if (link.background) {
        linkImageSource = link.background;
      }
      if (link.thumbnail) {
        linkImageSource = link.thumbnail;
      }
      if (!!link.product && !!link.product.productImage1) {
        linkImageSource = link.product.productImage1;
      }
      if (!!link.product && !!link.product.productImage2) {
        linkImageSource = link.product.productImage2;
      }
      if (!!link.product && !!link.product.productImage3) {
        linkImageSource = link.product.productImage3;
      }
      if (!!link.product && !!link.product.productImage4) {
        linkImageSource = link.product.productImage4;
      }
      return linkImageSource
    },

    linkClick(isClickable, path, linkType) {
      if (!isClickable) {
        return
      }
      i.landingpage.openLink(path, linkType);
    },

    copyLink(event) {
      i.landingpage.copyLink(event);
    },
  },
};

const _hoisted_1 = {
  key: 0,
  class: "root"
};
const _hoisted_2 = { class: "frow fc profiles-names" };
const _hoisted_3 = {
  key: 0,
  class: "flc"
};
const _hoisted_4 = {
  class: "profile-image-overlay",
  style: /*#__PURE__*/normalizeStyle([{ 'pointer-events': 'none' }])
};
const _hoisted_5 = { class: "fc upload-profile-image" };
const _hoisted_6 = { class: "fc profile-logo" };
const _hoisted_7 = { class: "df flc landing_page__username" };
const _hoisted_8 = ["href"];
const _hoisted_9 = { class: "df fl frow profiles-names-row landingpage__profiles-names-row" };
const _hoisted_10 = ["href"];
const _hoisted_11 = ["src"];
const _hoisted_12 = ["href"];
const _hoisted_13 = ["src"];
const _hoisted_14 = ["href"];
const _hoisted_15 = ["src"];
const _hoisted_16 = {
  key: 0,
  class: "frow fc landing_page__introtext--wrap"
};
const _hoisted_17 = { class: "fcol landing_page__content page-content--dashboard" };
const _hoisted_18 = { class: "landing_page__links-list sortable-list" };
const _hoisted_19 = {
  key: 0,
  class: "fc"
};
const _hoisted_20 = ["click"];
const _hoisted_21 = { class: "f1 fcol" };
const _hoisted_22 = { class: "f1 fc links-list__link-text" };
const _hoisted_23 = {
  key: 0,
  class: "f1 fc"
};
const _hoisted_24 = { class: "flc landingpage__shoplinkproduct-attributes" };
const _hoisted_25 = { class: "product-label" };
const _hoisted_26 = { class: "links-list__link-text product-price" };
const _hoisted_27 = { class: "links-list__link-text product-buy-now" };
const _hoisted_28 = ["aria-label", "data-clipboard-text"];
const _hoisted_29 = /*#__PURE__*/createElementVNode("svg", {
  x: "0px",
  y: "0px",
  width: "24px",
  height: "24px",
  viewBox: "0 0 24 24"
}, [
  /*#__PURE__*/createElementVNode("path", {
    fill: "#ddd",
    d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
  })
], -1 /* HOISTED */);
const _hoisted_30 = [
  _hoisted_29
];
const _hoisted_31 = { class: "f1 frt copyright copyright-footer" };
const _hoisted_32 = { class: "df frt footer-links" };
const _hoisted_33 = ["href"];
const _hoisted_34 = ["href"];
const _hoisted_35 = { class: "frt footer-links" };
const _hoisted_36 = { class: "fcol" };
const _hoisted_37 = { class: "df" };
const _hoisted_38 = /*#__PURE__*/createElementVNode("a", {
  href: "https://getfox.io",
  class: "footer-link-getfox",
  target: ""
}, " Getfox ", -1 /* HOISTED */);
const _hoisted_39 = /*#__PURE__*/createElementVNode("br", null, null, -1 /* HOISTED */);
const _hoisted_40 = { class: "frt" };
const _hoisted_41 = {
  className: "footer-link-fox",
  href: "https://gifts.worldwildlife.org/gift-center/gifts/species-adoptions/red-fox.aspx",
  target: "_blank"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    (!_ctx.user)
      ? (openBlock(), createElementBlock("div", _hoisted_1, "loading.."))
      : createCommentVNode("v-if", true),
    (_ctx.user)
      ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "profile-landingpage",
          style: normalizeStyle([
    _ctx.user.landingPage.fontFamily
      ? { 'font-family': _ctx.user.landingPage.fontFamily }
      : [],
  ])
        }, [
          createElementVNode("div", {
            class: "landing_page__background--overlay",
            style: normalizeStyle([
      {
        'background-image': _ctx.user.landingPage.background
          ? 'url(' + _ctx.user.appUrl + '/' + _ctx.user.landingPage.background + ')'
          : 'none',
        'background-color': _ctx.user.landingPage.backgroundColor
          ? _ctx.user.landingPage.backgroundColor
          : 'none',
        'background-position': _ctx.user.landingPage.backgroundPosition
          ? _ctx.user.landingPage.backgroundPosition
          : 'none',
      },
    ])
          }, [
            createElementVNode("div", {
              class: normalizeClass({
        fcol: true,
        landing_page__header: true,
        'no-background': !_ctx.user.landingPage.background,
      }),
              style: normalizeStyle([
  {
    'background-image':
      'linear-gradient(to bottom,' +
      _ctx.user.landingPage.blendColor +
      ', ' +
      _ctx.user.landingPage.blendColor.slice(0, 7) +
      '00)',
  },
])
            }, [
              createElementVNode("div", _hoisted_2, [
                (_ctx.user.profileImage)
                  ? (openBlock(), createElementBlock("div", _hoisted_3, [
                      createElementVNode("div", _hoisted_4, [
                        createElementVNode("form", _hoisted_5, [
                          createElementVNode("div", _hoisted_6, [
                            createElementVNode("label", {
                              class: "profile-logo-gfx",
                              style: normalizeStyle([
                    {
                      'background-image':
                        'url(' + _ctx.user.appUrl + '/' + _ctx.user.profileImage + ')',
                    },
                  ])
                            }, null, 4 /* STYLE */)
                          ])
                        ])
                      ]),
                      createElementVNode("div", _hoisted_7, [
                        createElementVNode("a", {
                          href: _ctx.user.appUrl + '/' + _ctx.user.username,
                          style: normalizeStyle([
                {
                  color: _ctx.user.landingPage.textColor
                    ? _ctx.user.landingPage.textColor
                    : 'none',
                },
              ])
                        }, toDisplayString(_ctx.user.landingPage.title
                      ? _ctx.user.landingPage.title
                      : _ctx.user.username), 13 /* TEXT, STYLE, PROPS */, _hoisted_8)
                      ])
                    ]))
                  : createCommentVNode("v-if", true)
              ]),
              createElementVNode("div", _hoisted_9, [
                (
            _ctx.user.socialMedia.instagramId && _ctx.user.socialMedia.instagramUsername
          )
                  ? (openBlock(), createElementBlock("a", {
                      key: 0,
                      href: 
  'https://instagram.com/' + _ctx.user.socialMedia.instagramUsername
,
                      target: "_blank",
                      rel: "noreferrer",
                      class: "fc profile-link--href profile-link--href-icon profile-link--href-ig",
                      style: normalizeStyle({
  color: _ctx.user.landingPage.textColor
    ? _ctx.user.landingPage.textColor
    : 'none',
})
                    }, [
                      createElementVNode("img", {
                        src: _ctx.user.appUrl + '/static/images/ig-icon-black.svg',
                        alt: "instagram"
                      }, null, 8 /* PROPS */, _hoisted_11)
                    ], 12 /* STYLE, PROPS */, _hoisted_10))
                  : createCommentVNode("v-if", true),
                (_ctx.user.socialMedia.facebookId && _ctx.user.socialMedia.facebookUrl)
                  ? (openBlock(), createElementBlock("a", {
                      key: 1,
                      href: _ctx.user.socialMedia.facebookUrl,
                      target: "_blank",
                      rel: "noreferrer",
                      class: "fc profile-link--href profile-link--href-icon profile-link--href-ig",
                      style: normalizeStyle({
              color: _ctx.user.landingPage.textColor
                ? _ctx.user.landingPage.textColor
                : 'none',
            })
                    }, [
                      createElementVNode("img", {
                        src: _ctx.user.appUrl + '/static/images/fb-icon-black.svg',
                        alt: "facebook"
                      }, null, 8 /* PROPS */, _hoisted_13)
                    ], 12 /* STYLE, PROPS */, _hoisted_12))
                  : createCommentVNode("v-if", true),
                (_ctx.user.socialMedia.twitterId && _ctx.user.socialMedia.twitterUrl)
                  ? (openBlock(), createElementBlock("a", {
                      key: 2,
                      href: _ctx.user.socialMedia.twitterUrl,
                      target: "_blank",
                      rel: "noreferrer",
                      class: "fc profile-link--href profile-link--href-icon profile-link--href-ig",
                      style: normalizeStyle({
              color: _ctx.user.landingPage.textColor
                ? _ctx.user.landingPage.textColor
                : 'none',
            })
                    }, [
                      createElementVNode("img", {
                        src: _ctx.user.appUrl + '/static/images/twitter-icon-black.svg',
                        alt: "twitter"
                      }, null, 8 /* PROPS */, _hoisted_15)
                    ], 12 /* STYLE, PROPS */, _hoisted_14))
                  : createCommentVNode("v-if", true)
              ]),
              (_ctx.user.landingPage.description)
                ? (openBlock(), createElementBlock("div", _hoisted_16, [
                    createElementVNode("div", {
                      class: "f1 landing_page__introtext",
                      style: normalizeStyle({
            color: _ctx.user.landingPage.textDescriptionColor
              ? _ctx.user.landingPage.textDescriptionColor
              : 'none',
          })
                    }, toDisplayString(_ctx.user.landingPage.description), 5 /* TEXT, STYLE */)
                  ]))
                : createCommentVNode("v-if", true)
            ], 6 /* CLASS, STYLE */),
            createElementVNode("div", _hoisted_17, [
              createElementVNode("ul", _hoisted_18, [
                (!_ctx.user.links.length)
                  ? (openBlock(), createElementBlock("div", _hoisted_19, toDisplayString(_ctx.user.translations.noLinksFound), 1 /* TEXT */))
                  : createCommentVNode("v-if", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.user.links, (link) => {
                  return (openBlock(), createElementBlock("li", {
                    key: link.id,
                    class: normalizeClass({
            df: true,
            flc: true,
            frow: true,
            'landing_page__link-row': true,
            'landing_page__link-row--clickable': link.isClickable,
            'link-resource': true,
            'sortable-list__item with-thumb': true,
          }),
                    click: $options.linkClick(link.isClickable, link.path, link.linkType)
                  }, [
                    (!!$options.getLinkImageSource(link))
                      ? (openBlock(), createElementBlock("div", {
                          key: 0,
                          class: "link-resource-thumb",
                          style: normalizeStyle({
              'background-image':
                'url(' + _ctx.user.appUrl + '/' + $options.getLinkImageSource(link) + ')',
            })
                        }, null, 4 /* STYLE */))
                      : createCommentVNode("v-if", true),
                    createElementVNode("div", _hoisted_21, [
                      createElementVNode("div", _hoisted_22, toDisplayString(link.name), 1 /* TEXT */),
                      (!!link.product)
                        ? (openBlock(), createElementBlock("div", _hoisted_23, [
                            createElementVNode("div", _hoisted_24, [
                              createElementVNode("span", _hoisted_25, toDisplayString(link.product.priceLabel === 'onlynow'
                          ? _ctx.user.translations.onlyNow
                          : link.product.priceLabel == 'sale'
                            ? _ctx.user.translations.sale
                            : link.product.priceLabel === 'special'
                              ? _ctx.user.translations.special
                              : ''), 1 /* TEXT */),
                              createElementVNode("span", _hoisted_26, toDisplayString(link.product.price) + " " + toDisplayString(link.product.currency), 1 /* TEXT */),
                              createElementVNode("span", _hoisted_27, toDisplayString(_ctx.user.translations.buyNow), 1 /* TEXT */)
                            ])
                          ]))
                        : createCommentVNode("v-if", true)
                    ]),
                    createElementVNode("div", {
                      class: "flc landingpage__copy-link",
                      "aria-label": _ctx.user.translations.copyLink,
                      "data-microtip-position": "bottom",
                      role: "tooltip",
                      "data-clipboard-text": 
                _ctx.user.appUrl + '/' + _ctx.user.username + '/' + link.linkUrl
              ,
                      onClick: _cache[0] || (_cache[0] = (...args) => ($options.copyLink && $options.copyLink(...args)))
                    }, _hoisted_30, 8 /* PROPS */, _hoisted_28)
                  ], 10 /* CLASS, PROPS */, _hoisted_20))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ]),
            createElementVNode("div", _hoisted_31, [
              createElementVNode("div", _hoisted_32, [
                createElementVNode("a", {
                  class: "footer-link",
                  href: _ctx.user.appUrl + '/static/support',
                  target: "_blank"
                }, toDisplayString(_ctx.user.translations.support), 9 /* TEXT, PROPS */, _hoisted_33),
                createElementVNode("a", {
                  class: "footer-link",
                  href: _ctx.user.appUrl + '/static/privacy',
                  target: "_blank"
                }, toDisplayString(_ctx.user.translations.privacyPolicy), 9 /* TEXT, PROPS */, _hoisted_34)
              ]),
              createElementVNode("div", _hoisted_35, [
                createElementVNode("div", _hoisted_36, [
                  createElementVNode("p", _hoisted_37, [
                    createTextVNode(" ©" + toDisplayString(_ctx.year) + ".  ", 1 /* TEXT */),
                    _hoisted_38,
                    createTextVNode(" " + toDisplayString(_ctx.user.translations.rights) + ".", 1 /* TEXT */),
                    _hoisted_39
                  ]),
                  createElementVNode("p", _hoisted_40, [
                    createTextVNode(toDisplayString(_ctx.user.translations.madeWith) + "❤️" + toDisplayString(_ctx.user.translations.forAll) + toDisplayString(' ') + " ", 1 /* TEXT */),
                    createElementVNode("a", _hoisted_41, toDisplayString(' ') + toDisplayString(_ctx.user.translations.foxes), 1 /* TEXT */)
                  ])
                ])
              ])
            ])
          ], 4 /* STYLE */)
        ], 4 /* STYLE */))
      : createCommentVNode("v-if", true)
  ], 64 /* STABLE_FRAGMENT */))
}

script.render = render;
script.__file = "src/LandingPage.vue";

var components = { LandingPage: script };

const getfox_landingpage = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

export { getfox_landingpage as default };
