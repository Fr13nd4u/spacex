import * as React from 'react'
import styled from 'styled-components'

// import Title from '../atoms/text/Title'

interface BannerProps {
  children: React.ReactNode
  bgImg: string
  height?: string
  brightness?: number
}

const StaticBanner: React.FC<BannerProps> = ({
  children,
  bgImg,
  height,
  brightness
}) => {
  return (
    <Component height={height}>
      <ImageWrapper brightness={brightness}>
        <img src={bgImg} alt="banner img" />
      </ImageWrapper>
      {children}
    </Component>
  )
}

const Component = styled.section<{ height?: string }>`
  position: relative;
  height: ${p => p.height ?? '420px'};
`

const ImageWrapper = styled.div<{ brightness?: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: brightness(${p => p.brightness ?? 52}%)
  }
`

export default StaticBanner
