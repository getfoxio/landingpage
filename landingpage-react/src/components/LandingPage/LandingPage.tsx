import React, { useState, useEffect } from 'react'
import { getfox } from '../../lib/landingpage'

export interface LandingPageProps {
  username: any
  apiKey: any
  apiEndpoint: string
}

const LandingPage = ({ username, apiKey, apiEndpoint }: LandingPageProps) => {
  const [user, setUser] = useState<any>()
  const [appUrl, setAppUrl] = useState<string>('https://getfox.io')

  useEffect(() => {
    getfox.landingpage
      .init({
        key: apiKey,
        username: username,
        apiUrl: apiEndpoint,
      })
      .then((user: any) => {
        setUser(user)
      })
  }, [])

  useEffect(() => {
    if (user && !user.appUrl.includes('None')) {
      console.log('update', user.appUrl)
      setAppUrl(user.appUrl)
    }
  }, [user])

  return (
    <div className="landing-page__root">
      {user && appUrl ? (
        <div className="user__root">
          {user.landingPage.fontFamily ? (
            <style> font-family:${user.landingPage.fontFamily};</style>
          ) : null}
          <div className="profile-landingpage">
            <div
              className="landing_page__background--overlay"
              style={{
                backgroundImage: user.landingPage.background
                  ? `url(${appUrl}/${user.landingPage.background})`
                  : undefined,
                backgroundPosition: user.landingPage.background
                  ? user.landingPage.backgroundPosition
                  : null,
                backgroundColor: user.landingPage.background
                  ? user.landingPage.backgroundColor
                  : null,
              }}
            >
              <div
                className={`fcol landing_page__header${
                  !user.landingPage.background ? ' no-background' : ''
                }`}
                style={{
                  backgroundImage:
                    'linear-gradient(to bottom,' +
                    user.landingPage.blendColor +
                    ', ' +
                    user.landingPage.blendColor.slice(0, 7) +
                    '00)',
                }}
              >
                <div className="frow fc profiles-names">
                  {user.profileImage ? (
                    <div className="flc">
                      <div
                        className="profile-image-overlay"
                        style={{ pointerEvents: 'none' }}
                      >
                        <form className="fc upload-profile-image">
                          <div className="fc profile-logo">
                            <label
                              className="profile-logo-gfx"
                              style={{
                                backgroundImage: `url('${appUrl}/${user.profileImage}')`,
                              }}
                            />
                          </div>
                        </form>
                      </div>
                      <div className="df flc landing_page__username">
                        <a
                          href={`${appUrl}/${user.username}`}
                          style={{
                            color: user.landingPage.textColor
                              ? user.landingPage.textColor
                              : null,
                          }}
                        >
                          {user.landingPage.title
                            ? user.landingPage.title
                            : user.username}
                        </a>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="df fl frow profiles-names-row landingpage__profiles-names-row">
                  {user.socialMedia.instagramId &&
                  user.socialMedia.instagramUsername ? (
                    <a
                      href={`https://instagram.com/${user.socialMedia.instagramUsername}`}
                      target="_blank"
                      rel="noreferrer"
                      className="fc profile-link--href profile-link--href-icon profile-link--href-ig"
                      style={{
                        color: user.landingPage.textColor
                          ? user.landingPage.textColor
                          : null,
                      }}
                    >
                      <img
                        src={`${appUrl}/static/images/ig-icon-black.svg`}
                        alt="instagram"
                      />
                    </a>
                  ) : null}
                  {user.socialMedia.facebookId &&
                  user.socialMedia.facebookUrl ? (
                    <a
                      href={`${user.socialMedia.facebookUrl}`}
                      target="_blank"
                      rel="noreferrer"
                      className="fc profile-link--href profile-link--href-icon profile-link--href-ig"
                      style={{
                        color: user.landingPage.textColor
                          ? user.landingPage.textColor
                          : null,
                      }}
                    >
                      <img
                        src={`${appUrl}/static/images/fb-icon-black.svg`}
                        alt="facebook"
                      />
                    </a>
                  ) : null}
                  {user.socialMedia.twitterId && user.socialMedia.twitterUrl ? (
                    <a
                      href={`${user.socialMedia.twitterUrl}`}
                      target="_blank"
                      rel="noreferrer"
                      className="fc profile-link--href profile-link--href-icon profile-link--href-ig"
                      style={{
                        color: user.landingPage.textColor
                          ? user.landingPage.textColor
                          : null,
                      }}
                    >
                      <img
                        src={`${appUrl}/static/images/twitter-icon-black.svg`}
                        alt="twitter"
                      />
                    </a>
                  ) : null}
                </div>
              </div>
              <div className="fcol landing_page__content page-content--dashboard">
                <ul className="landing_page__links-list sortable-list">
                  {!user.links.length ? (
                    <div className="fc">{user.translations.noLinksFound}</div>
                  ) : (
                    user.links.map((link: any) => {
                      let linkImageSource = ''
                      if (!!link.background) {
                        linkImageSource = link.background
                      }
                      if (!!link.thumbnail) {
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
                      let linkImage = <div></div>
                      if (!!linkImageSource) {
                        linkImage = (
                          <div
                            className="link-resource-thumb"
                            style={{
                              backgroundImage: `url(${appUrl}/${linkImageSource})`,
                            }}
                          ></div>
                        )
                      }
                      return (
                        <li
                          key={link.id}
                          className={`df flc frow landing_page__link-row ${
                            link.isClickable
                              ? 'landing_page__link-row--clickable'
                              : ''
                          } link-resource sortable-list__item with-thumb`}
                          onClick={
                            link.isClickable
                              ? () => {
                                  getfox.landingpage.openLink(
                                    link.path,
                                    link.linkType
                                  )
                                }
                              : undefined
                          }
                        >
                          {linkImage}
                          <div className="f1 fcol">
                            <div className="f1 fc">{link.name}</div>
                            {link.product ? (
                              <div className="f1 fc">
                                <div className="flc landingpage__shoplinkproduct-attributes">
                                  <span className="product-label">
                                    {link.product.priceLabel === 'onlynow'
                                      ? user.translations.onlyNow
                                      : ''}
                                    {link.product.priceLabel === 'sale'
                                      ? user.translations.sale
                                      : ''}
                                    {link.product.priceLabel === 'special'
                                      ? user.translations.special
                                      : ''}
                                  </span>
                                  <span className="product-price">
                                    {link.product.price} {link.product.currency}
                                  </span>
                                  <span className="product-buy-now">
                                    {user.translations.buyNow}
                                  </span>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </li>
                      )
                    })
                  )}
                </ul>
              </div>
              <div className="f1 frt copyright copyright-footer">
                <div className="df frt footer-links">
                  <a
                    className="footer-link"
                    href={`${appUrl}/static/support`}
                    target="_blank"
                  >
                    {user.translations.support}
                  </a>
                  <a
                    className="footer-link"
                    href={`${appUrl}/static/privacy`}
                    target="_blank"
                  >
                    {user.translations.privacyPolicy}
                  </a>
                </div>
                <div className="frt footer-links">
                  <div className="fcol">
                    <p className="df">
                      &copy;.{' '}
                      <a
                        href="https://getfox.io"
                        className="footer-link-getfox"
                        target=""
                      >
                        Getfox
                      </a>
                      . {user.translations.rights}.<br />
                    </p>
                    <p className="frt">
                      {user.translations.madeWith}❤️{user.translations.forAll}{' '}
                      <a
                        className="footer-link-fox"
                        href="https://gifts.worldwildlife.org/gift-center/gifts/species-adoptions/red-fox.aspx"
                        target="_blank"
                      >
                        {' '}
                        {user.translations.foxes}
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default LandingPage
