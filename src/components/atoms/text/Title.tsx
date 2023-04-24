import * as React from 'react'
import styled from 'styled-components'

interface TitleProps {
  children: React.ReactNode
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <TitleStyle>{children}</TitleStyle>
  )
}

const TitleStyle = styled.h2`
  font-weight: 800;
  font-size: 48px;
  line-height: 58px;
  text-transform: uppercase;

  text-align: center;
  color: #fff;

  span {
    font-size: 310px;
    line-height: 0.8;
  }
`

export default Title
