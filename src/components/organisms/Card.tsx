import * as React from 'react'
import styled from 'styled-components'

import { Subtitle, SubtitleStyle } from '../atoms/text/Subtitle'
import { Text, TextStyle } from '../atoms/text/Text'
import { NavButtons } from '../molecules/NavButtons'

interface CardProps {
  cardImg: string
  iconImg: string
  title: string
  text: string
  isActive?: boolean
  onIconClick?: () => void
}

export const Card: React.FC<CardProps> = (props) => {
  const { cardImg, title, text, iconImg, isActive, onIconClick } = props

  return (
    <CardStyle>
      <CardImg src={cardImg} alt="card img" />
      <CardContent>
        <Subtitle>{title}</Subtitle>
        <Text>{text}</Text>
        <NavButtons
          iconImg={iconImg}
          btnText="buy"
          order="btn"
          gap={16}
          onIconClick={onIconClick}
          isActive={isActive}
        />
      </CardContent>
    </CardStyle>
  )
}

export const CardStyle = styled.div`
  text-align: center;

  ${SubtitleStyle} {
    margin-bottom: 16px;
  }

  ${TextStyle} {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    margin-bottom: 64px;
  }
`

const CardImg = styled.img`
  width: 100%;
  height: 296px;
  object-fit: cover;
`

const CardContent = styled.div`
  padding: 32px 20px 20px;
`
