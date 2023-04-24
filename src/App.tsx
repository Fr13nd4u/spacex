import * as React from 'react'
import { GlobalStyle } from './styles/globalStyles'
import { Routes, Route } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { About, Favourites, Help, Home, Tours } from './components/pages'
import { Header } from './components/templates/Header'
import { favouriteRocketState, rocketState } from './recoilState'
import { getRockets, type IRocket } from './queries/rockets'

import img_1 from './assets/slide-1.png'
import img_2 from './assets/slide-2.png'
import img_3 from './assets/slide-3.png'

export const App: React.FC = () => {
  const [rockets, setRockets] = useRecoilState(rocketState)
  const setFavourites = useSetRecoilState(favouriteRocketState)

  const imgArr = [img_1, img_2, img_3]
  const { loading, error, data } = useQuery(getRockets)

  React.useLayoutEffect(() => {
    if (!loading && !error) {
      const rocketsWithImages = data.rockets
        .map((rocket: IRocket, index: any) => ({
          ...rocket,
          photo: imgArr[index % imgArr.length],
          isFavourite: false
        }))

      setRockets(rocketsWithImages)

      setFavourites(rockets.filter((rocket: IRocket) => rocket.isFavourite))
    }
  }, [data])

  React.useLayoutEffect(() => {
    setFavourites(rockets.filter((rocket: IRocket) => rocket.isFavourite))
  }, [rockets])

  return (
    <>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tours" element={<Tours/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
      </Routes>
    </>
  )
}
