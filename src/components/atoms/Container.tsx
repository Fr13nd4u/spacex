import * as React from 'react'
import styled from 'styled-components'

interface ContainerProps {
  maxWidth?: string
  padding?: string
}

interface ReusableContainerProps extends ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ReusableContainerProps> = ({
  children,
  maxWidth,
  padding
}) => {
  return (
    <ContainerWrap maxWidth={maxWidth} padding={padding}>
      {children}
    </ContainerWrap>
  )
}

const ContainerWrap = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${(props) => props.maxWidth ?? '1200px'};
  margin: 0 auto;
  padding: 0 ${(props) => props.padding ?? '20px'};
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding: 0 ${(props) => props.padding ?? '10px'};
  }
`
export default Container
