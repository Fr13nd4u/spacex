import * as React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  iconImg?: string
  disabled?: boolean
  onClick?: () => void
  isActive?: boolean
}

const IconButton: React.FC<ButtonProps> = (prop) => {
  const { iconImg, isActive, disabled = false, ...props } = prop
  return (
    <StyledButton disabled={disabled} isActive={isActive} {...props}>
      <img src={iconImg} alt="Heart icon" />
    </StyledButton>
  )
}

const StyledButton = styled.button<ButtonProps>`
  background: ${(p) => p.isActive ? '#DD377D' : '#D3EAFF'};
  transition: all 0.3s  ease-in;

  img {
    padding: 15px;
  }

  &:hover {
    cursor: pointer;
    background: #DD377D;
    transition: all 0.3s ease-in;
  }

  &:active {
    opacity: 0.75;
  }
`

export default IconButton
