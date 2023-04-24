import * as React from 'react'
import styled from 'styled-components'

interface TextProps {
  children: React.ReactNode
  onClick?: () => void
}

export const Text: React.FC<TextProps> = (props) => {
  const { children } = props
  return (
    <TextStyle {...props}>{children}</TextStyle>
  )
}

export const TextStyle = styled.p`
  font-family: 'Lato';
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;

  color: #556B84;
`
