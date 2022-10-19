import React, { useState, useEffect } from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  PocketShareButton,
  InstapaperShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  EmailIcon,
} from 'react-share'
import slashes from 'remove-trailing-slash'
import { useSiteMetaData } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

export const ShareIcon = ({
  url,
  title,
  children,
  media,
  round = true,
  size = 32,
  borderRadius = 0,
  iconBgStyle = {},
  logoFillColor = 'white',
  socialMediaName,
}) => {
  const { siteUrl } = useSiteMetaData()
  const shareUrl = `${slashes(siteUrl)}${url}`
  const shareMedia = `${slashes(siteUrl)}${media}`

  const [button, setButton] = useState(`${socialMediaName}ShareButton`)
  const [icon, setIcon] = useState(`${socialMediaName}ShareIcon`)
  const Map = {
    button: button,
    icon: icon,
  }

  let ShareButton = Map['button']
  let ShareIcon = Map['icon']

  return (
    <ShareButton url={shareUrl}>
      {children}

      {!children && (
        <ShareIcon
          round={round}
          size={size}
          borderRadius={borderRadius}
          iconBgStyle={iconBgStyle}
          logoFillColor={logoFillColor}
        />
      )}
    </ShareButton>
  )
}
