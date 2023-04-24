/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import * as React from 'react'

import IconButton from '../atoms/buttons/IconButton'
import Button from '../atoms/buttons/Button'
import styled from 'styled-components'

interface ButtonsProps {
  btnText: string
  iconImg?: string
  gap?: number
  order?: 'btn' | 'icon'
  onBtnClick?: () => void
  onIconClick?: () => void
  isActive?: boolean
}

export const NavButtons: React.FC<ButtonsProps> = (props) => {
  const {
    btnText,
    gap,
    order = 'icon',
    iconImg,
    onBtnClick,
    onIconClick,
    isActive
  } = props

  return (
    <NavButtonStyle gap={gap} order={order}>
      <IconButton isActive={isActive} iconImg={iconImg} onClick={onIconClick} />
      <Button disabled onClick={onBtnClick}>{btnText}</Button>
    </NavButtonStyle>
  )
}

export const NavButtonStyle = styled.div<
{ gap?: number, order?: 'btn' | 'icon' }
>`
  display: flex;
  flex-direction: row-reverse;
  gap: ${p => p.gap ?? 12}px;
  flex-direction: ${p => p.order === 'btn' ? 'row-reverse' : 'row'};
`
