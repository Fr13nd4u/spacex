import * as React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = (prop) => {
  const { children, disabled = false, ...props } = prop

  return (
    <StyledButton disabled={disabled} {...props}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button<ButtonProps>`
  background: #D3EAFF;
  padding: 12px;
  width: 100%;

  font-family: 'Syne';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;

  color: #000; 
  opacity: 1;
  transition: all 0.3s ease-in;

  &:hover {
    cursor: pointer;
    color: #fff;
    background: #DD377D;
    transition: all 0.3s ease-in;
  }

  &:active {
    opacity: 0.75;
  }

`
export default Button
