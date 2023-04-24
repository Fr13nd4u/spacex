import * as React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import Container from '../atoms/Container'
import Logo from '../atoms/Logo'
import Navbar from '../molecules/Navbar'
import { NavButtons, NavButtonStyle } from '../molecules/NavButtons'

import HeartImg from '../../assets/Heart.png'

export const Header: React.FC = () => {
  const navigate = useNavigate()
  const { pathname } = window.location

  const handleClick = (): void => {
    navigate('/favourites')
  }

  return (
    <HeaderWrap>
      <Container>
        <HeaderBlock>
          <Logo />
          <Navbar />
          <NavButtons
            iconImg={HeartImg}
            btnText="sign in"
            onIconClick={handleClick}
            isActive={pathname === '/favourites'}
          />
        </HeaderBlock>
      </Container>

    </HeaderWrap>
  )
}

const HeaderWrap = styled.header`
  z-index: 100;
  position: sticky;
  background: rgba(30, 30, 30, 0.48);
  margin-bottom: -80px;
`

const HeaderBlock = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;

  ${NavButtonStyle} {
    width: 228px;
  }
`
