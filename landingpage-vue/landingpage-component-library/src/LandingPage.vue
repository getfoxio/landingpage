<script lang="ts">
import getfox from './lib/landingpage'
export default {
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
    this.fetchData()
  },
  watch: {
    currentBranch: 'fetchData',
  },

  methods: {
    async fetchData() {
      getfox.landingpage
        .init({
          key: this.apikey,
          username: this.username,
        })
        .then((dataUser) => {
          this.user = dataUser
        })
    },
    truncate(v) {
      const newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate(v) {
      return v.replace(/T|Z/g, ' ')
    },
    getLinkImageSource(link) {
      let linkImageSource = ''
      if (link.background) {
        linkImageSource = link.background
      }
      if (link.thumbnail) {
        linkImageSource = link.thumbnail
      }
      if (!!link.product && !!link.product.productImage1) {
        linkImageSource = link.product.productImage1
      }
      if (!!link.product && !!link.product.productImage2) {
        linkImageSource = link.product.productImage2
      }
      if (!!link.product && !!link.product.productImage3) {
        linkImageSource = link.product.productImage3
      }
      if (!!link.product && !!link.product.productImage4) {
        linkImageSource = link.product.productImage4
      }
      return linkImageSource
    },

    linkClick(isClickable, path, linkType) {
      if (!isClickable) {
        return
      }
      getfox.landingpage.openLink(path, linkType)
    },

    copyLink(event) {
      getfox.landingpage.copyLink(event)
    },
  },
}
</script>

<template>
  <div class="root" v-if="!user">loading..</div>
  <div class="profile-landingpage" v-if="user" :style="[
    user.landingPage.fontFamily
      ? { 'font-family': user.landingPage.fontFamily }
      : [],
  ]">
    <div class="landing_page__background--overlay" :style="[
      {
        'background-image': user.landingPage.background
          ? 'url(' + user.appUrl + '/' + user.landingPage.background + ')'
          : 'none',
        'background-color': user.landingPage.backgroundColor
          ? user.landingPage.backgroundColor
          : 'none',
        'background-position': user.landingPage.backgroundPosition
          ? user.landingPage.backgroundPosition
          : 'none',
      },
    ]">
      <div :class="{
        fcol: true,
        landing_page__header: true,
        'no-background': !user.landingPage.background,
      }" :style="[
  {
    'background-image':
      'linear-gradient(to bottom,' +
      user.landingPage.blendColor +
      ', ' +
      user.landingPage.blendColor.slice(0, 7) +
      '00)',
  },
]">
        <div class="frow fc profiles-names">
          <div class="flc" v-if="user.profileImage">
            <div class="profile-image-overlay" :style="[{ 'pointer-events': 'none' }]">
              <form class="fc upload-profile-image">
                <div class="fc profile-logo">
                  <label class="profile-logo-gfx" :style="[
                    {
                      'background-image':
                        'url(' + user.appUrl + '/' + user.profileImage + ')',
                    },
                  ]"></label>
                </div>
              </form>
            </div>
            <div class="df flc landing_page__username">
              <a v-bind:href="user.appUrl + '/' + user.username" :style="[
                {
                  color: user.landingPage.textColor
                    ? user.landingPage.textColor
                    : 'none',
                },
              ]">
                {{
                    user.landingPage.title
                      ? user.landingPage.title
                      : user.username
                }}
              </a>
            </div>
          </div>
        </div>
        <div class="df fl frow profiles-names-row landingpage__profiles-names-row">
          <a v-if="
            user.socialMedia.instagramId && user.socialMedia.instagramUsername
          " v-bind:href="
  'https://instagram.com/' + user.socialMedia.instagramUsername
" target="_blank" rel="noreferrer" class="fc profile-link--href profile-link--href-icon profile-link--href-ig" :style="{
  color: user.landingPage.textColor
    ? user.landingPage.textColor
    : 'none',
}">
            <img v-bind:src="user.appUrl + '/static/images/ig-icon-black.svg'" alt="instagram" />
          </a>
          <a v-if="user.socialMedia.facebookId && user.socialMedia.facebookUrl"
            v-bind:href="user.socialMedia.facebookUrl" target="_blank" rel="noreferrer"
            class="fc profile-link--href profile-link--href-icon profile-link--href-ig" :style="{
              color: user.landingPage.textColor
                ? user.landingPage.textColor
                : 'none',
            }">
            <img v-bind:src="user.appUrl + '/static/images/fb-icon-black.svg'" alt="facebook" />
          </a>
          <a v-if="user.socialMedia.twitterId && user.socialMedia.twitterUrl" v-bind:href="user.socialMedia.twitterUrl"
            target="_blank" rel="noreferrer" class="fc profile-link--href profile-link--href-icon profile-link--href-ig"
            :style="{
              color: user.landingPage.textColor
                ? user.landingPage.textColor
                : 'none',
            }">
            <img v-bind:src="user.appUrl + '/static/images/twitter-icon-black.svg'" alt="twitter" />
          </a>
        </div>
        <div class="frow fc landing_page__introtext--wrap" v-if="user.landingPage.description">
          <div class="f1 landing_page__introtext" :style="{
            color: user.landingPage.textDescriptionColor
              ? user.landingPage.textDescriptionColor
              : 'none',
          }">
            {{ user.landingPage.description }}
          </div>
        </div>
      </div>
      <div class="fcol landing_page__content page-content--dashboard">
        <ul class="landing_page__links-list sortable-list">
          <div class="fc" v-if="!user.links.length">
            {{ user.translations.noLinksFound }}
          </div>
          <li v-for="link in user.links" v-bind:key="link.id" :class="{
            df: true,
            flc: true,
            frow: true,
            'landing_page__link-row': true,
            'landing_page__link-row--clickable': link.isClickable,
            'link-resource': true,
            'sortable-list__item with-thumb': true,
          }" v-bind:click="linkClick(link.isClickable, link.path, link.linkType)">
            <div v-if="!!getLinkImageSource(link)" class="link-resource-thumb" :style="{
              'background-image':
                'url(' + user.appUrl + '/' + getLinkImageSource(link) + ')',
            }"></div>
            <div class="f1 fcol">
              <div class="f1 fc links-list__link-text">{{ link.name }}</div>
              <div class="f1 fc" v-if="!!link.product">
                <div class="flc landingpage__shoplinkproduct-attributes">
                  <span class="product-label">
                    {{
                        link.product.priceLabel === 'onlynow'
                          ? user.translations.onlyNow
                          : link.product.priceLabel == 'sale'
                            ? user.translations.sale
                            : link.product.priceLabel === 'special'
                              ? user.translations.special
                              : ''
                    }}
                  </span>
                  <span class="links-list__link-text product-price">
                    {{ link.product.price }} {{ link.product.currency }}
                  </span>
                  <span class="links-list__link-text product-buy-now">
                    {{ user.translations.buyNow }}
                  </span>
                </div>
              </div>
            </div>
            <div class="flc landingpage__copy-link" v-bind:aria-label="user.translations.copyLink"
              data-microtip-position="bottom" role="tooltip" v-bind:data-clipboard-text="
                user.appUrl + '/' + user.username + '/' + link.linkUrl
              " v-on:click="copyLink">
              <svg x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24">
                <path fill="#ddd"
                  d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z">
                </path>
              </svg>
            </div>
          </li>
        </ul>
      </div>
      <div class="f1 frt copyright copyright-footer">
        <div class="df frt footer-links">
          <a class="footer-link" v-bind:href="user.appUrl + '/static/support'" target="_blank">
            {{ user.translations.support }}
          </a>
          <a class="footer-link" v-bind:href="user.appUrl + '/static/privacy'" target="_blank">
            {{ user.translations.privacyPolicy }}
          </a>
        </div>
        <div class="frt footer-links">
          <div class="fcol">
            <p class="df">
              &copy;{{ year }}.&nbsp;
              <a href="https://getfox.io" class="footer-link-getfox" target="">
                Getfox
              </a>
              {{ user.translations.rights }}.<br />
            </p>
            <p class="frt">
              {{ user.translations.madeWith }}❤️{{ user.translations.forAll
              }}{{ ' ' }}
              <a className="footer-link-fox"
                href="https://gifts.worldwildlife.org/gift-center/gifts/species-adoptions/red-fox.aspx"
                target="_blank">{{ ' ' }}{{ user.translations.foxes }}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.landing_page__background--overlay,
.profile-landingpage {
  height: 100vh;
}
</style>
