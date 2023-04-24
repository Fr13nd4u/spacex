import * as React from 'react'
import styled from 'styled-components'

interface TextProps {
  children: React.ReactNode
}

export const Subtitle: React.FC<TextProps> = ({ children }) => {
  return (
    <SubtitleStyle>{children}</SubtitleStyle>
  )
}

export const SubtitleStyle = styled.h4`
  font-family: 'Syne';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;

  color: #1E1E1E;
`
