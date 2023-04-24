import * as React from 'react'
import styled from 'styled-components'

import { useRecoilState, useRecoilValue } from 'recoil'
import { favouriteRocketState, rocketState } from '../../../recoilState'

import StaticBanner from '../../organisms/StaticBanner'
import Title from '../../atoms/text/Title'
import { Text, TextStyle } from '../../atoms/text/Text'
import Container from '../../atoms/Container'
import { Card, CardStyle } from '../../organisms/Card'

import BannerBg from '../../../assets/slide-3.png'
import DeleteImg from '../../../assets/Delete.png'
import { type IRocket } from '../../../queries/rockets'

export const Favourites: React.FC = () => {
  const favourites = useRecoilValue(favouriteRocketState)
  const [rockets, setRockets] = useRecoilState(rocketState)

  const deleteRocket = (id: string): void => {
    const newRockets: IRocket[] = rockets.map((rocket: IRocket) => {
      if (rocket.id === id) {
        return { ...rocket, isFavourite: !rocket.isFavourite }
      }
      return rocket
    }
    )

    setRockets(newRockets)
  }

  const deleteAllRocket = (): void => {
    const newRockets: IRocket[] = rockets.map((rocket: IRocket) => {
      return { ...rocket, isFavourite: false }
    }
    )

    setRockets(newRockets)
  }

  return (
    <>
      <StaticBanner bgImg={BannerBg} brightness={36}>
        <BannerContent>
          <Title>favourites</Title>
        </BannerContent>
      </StaticBanner>
      <Section>
        <Container>
          <Text onClick={() => { deleteAllRocket() }}>Clear all</Text>
          <CardWrap >
            {favourites?.map((rocket: IRocket) => (<Card
              key={rocket.id}
              iconImg={DeleteImg}
              cardImg={rocket.photo}
              title={rocket.name}
              text={rocket.description}
              onIconClick={() => { deleteRocket(rocket.id) }}
            />))}
          </CardWrap>
        </Container>
      </Section>
    </>
  )
}

const BannerContent = styled.div`
  height: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
`

const Section = styled.section`
  padding: 100px 0;

  ${TextStyle} {
    margin-left: auto;
    width: fit-content;

    &:hover {
      cursor: pointer;
    }
  }
`

const CardWrap = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 40px;

  ${CardStyle} {
    width: calc(33% - 10px);
  }
`
