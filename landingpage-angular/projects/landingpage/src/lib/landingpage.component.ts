import { Component, Input, OnInit } from '@angular/core'
import { getfox } from '../../../../src/lib/landingpage.js'

@Component({
  selector: 'lib-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent implements OnInit {
  @Input() username: string = ''
  @Input() apikey: string = ''

  user: any
  isUser: boolean = false

  constructor() {}

  ngOnInit(): void {
    this.fetchEvent().then(() => {
      console.log(this.user)
    })
  }

  fetchEvent() {
    return getfox.landingpage
      .init({
        key: this.apikey,
        username: this.username,
      })
      .then((dataUser: any) => {
        this.user = dataUser
        this.isUser = true
      })
  }

  linkClick(isClickable: boolean, path: string, linkType: string) {
    if (!isClickable) {
      return
    }
    getfox.landingpage.openLink(path, linkType)
  }

  getLinkImageSource(link: any) {
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
    return linkImageSource
  }

  copyLink(event: any) {
    getfox.landingpage.copyLink(event)
  }
}
