import * as React from 'react'
import styled from 'styled-components'

import { type IRocket } from '../../../queries/rockets'
import { rocketState } from '../../../recoilState'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import StaticBanner from '../../organisms/StaticBanner'
import { Card, CardStyle } from '../../organisms/Card'

import Container from '../../atoms/Container'
import Title from '../../atoms/text/Title'
import Anchor from '../../atoms/Anchor'

import cardImg1 from '../../../assets/slide-1.png'
import HeartImg from '../../../assets/Heart.png'
import { SliderComponent } from '../../organisms/Slider'

export const Home: React.FC = () => {
  const rockets = useRecoilValue(rocketState)
  const setRockets = useSetRecoilState(rocketState)

  const addFavoriteRocket = (id: string): void => {
    const newRockets: IRocket[] = rockets.map((rocket: IRocket) => {
      if (rocket.id === id) {
        return { ...rocket, isFavourite: !rocket.isFavourite }
      }
      return rocket
    }
    )

    setRockets(newRockets)
  }

  return (
    <>
      <StaticBanner bgImg={cardImg1} height="100vh">
        <BannerContent>
          <Title>The space is waiting for<br/><span>YOU</span></Title>
          <Anchor scrollTo="main"/>
        </BannerContent>
      </StaticBanner>
      <Section id="main">
        <Container>
          <MainTitle>popular tours</MainTitle>
          <SliderComponent>
            {rockets.map((rocket: IRocket) => (<Card
              key={rocket.id}
              cardImg={rocket.photo}
              iconImg={HeartImg}
              title={rocket.name}
              text={rocket.description}
              onIconClick={() => { addFavoriteRocket(rocket.id) }}
              isActive={rocket.isFavourite}
            />))}
          </SliderComponent>
        </Container>
      </Section>
    </>
  )
}

const Section = styled.section`
  padding: 100px 0;

  ${CardStyle} {
    margin-right: 20px;
  }
`

const BannerContent = styled.div`
  height: 100%; 
  display: flex;
  flex-direction: column;
  gap: 58px;
  justify-content: center;
  align-items: center;
`

const MainTitle = styled.h3`
  font-family: 'Syne';
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;

  color: #1E1E1E;
  margin-bottom: 43px;
`
