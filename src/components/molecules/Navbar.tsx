import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar: React.FC = () => {
  return (
    <NavbarWrap>
      <NavbarItem><Link to="/">Home</Link></NavbarItem>
      <NavbarItem>
        <Link aria-disabled="true" to="/tours">Tours</Link>
      </NavbarItem>
      <NavbarItem>
        <Link aria-disabled="true" to="/about">About</Link>
      </NavbarItem>
      <NavbarItem>
        <Link aria-disabled="true" to="/help">Help</Link>
      </NavbarItem>
    </NavbarWrap>
  )
}

const NavbarWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  list-style-type: none;
  padding: 0;
`

const NavbarItem = styled.li`
  a {
    font-family: 'Lato', sans-serif;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    text-transform: uppercase;
    color: #fff;

    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 0%;
      height: 1px;
      bottom: -4px;
      left: 0px;
      background-color: #fff;
      visibility: hidden;
      transition: all 0.4s ease-in-out;
    }

    &:hover {

      &::before {
        visibility: visible;
        width: 100%;
      }   
    }

    &[aria-disabled='true'] {
      pointer-events: none;
    }
  }
`

export default Navbar
