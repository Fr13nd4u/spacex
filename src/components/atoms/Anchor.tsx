import * as React from 'react'
import AnchorImg from '../../assets/ArrowDown.png'
import styled from 'styled-components'

interface AnchorProps {
  scrollTo: string
}

const Anchor: React.FC<AnchorProps> = ({ scrollTo }) => {
  return (
    <AnchorStyle href={`#${scrollTo}`}>Explore tours
      <span><img src={AnchorImg} alt="Anchor" /></span>
    </AnchorStyle>
  )
}

const AnchorStyle = styled.a`
  display: flex;
  gap: 18px;
  align-items: baseline;

  font-family: 'Lato';
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  text-decoration: none;

  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  span img {
    width: 20px;
    height: 25px;
  }
`

export default Anchor
