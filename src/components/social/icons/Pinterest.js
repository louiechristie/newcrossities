import React from 'react'
import { PinterestShareButton, PinterestIcon } from 'react-share'
import slashes from 'remove-trailing-slash'
import { useSiteMetaData } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'

export const Pinterest = ({
  url,
  media,
  title,
  children,
  round = true,
  size = 32,
  borderRadius = 0,
  iconBgStyle = {},
  logoFillColor = 'white',
}) => {
  const { siteUrl } = useSiteMetaData()
  const shareUrl = `${slashes(siteUrl)}${url}`
  const shareMedia = `${slashes(siteUrl)}${media}`

  return (
    <PinterestShareButton url={shareUrl} media={shareMedia} description={title}>
      {children}
      {!children && (
        <PinterestIcon
          round={round}
          size={size}
          borderRadius={borderRadius}
          iconBgStyle={iconBgStyle}
          logoFillColor={logoFillColor}
        />
      )}
    </PinterestShareButton>
  )
}
