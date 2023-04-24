import * as React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import IconButton from '../atoms/buttons/IconButton'
import prevIcon from '../../assets/prev.png'
import nextIcon from '../../assets/next.png'
import styled from 'styled-components'

interface SliderProps {
  children: React.ReactNode
}

interface ICustomPaging {
  onClick: () => void
  active: boolean
}

export const SliderComponent: React.FC<SliderProps> = ({ children }) => {
  const CustomPaging = ({ onClick, active }: ICustomPaging): any => (
    <CustomDot onClick={onClick} active={active} />
  )

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <IconButton iconImg={prevIcon}/>,
    nextArrow: <IconButton iconImg={nextIcon}/>,
    dotsClass: 'slick-dots',
    customPaging: CustomPaging,
    appendDots: (dots: any) => (
      <CustomDotsContainer>
        {dots}
      </CustomDotsContainer>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <SliderStyle {...settings}>{children}</SliderStyle>
  )
}

const SliderStyle = styled<any>(Slider)`
  .slick-prev, .slick-next {
    width: auto;
    height: auto;
    top: calc(-4% - 43px);
    
    img {
      padding: 15px 18px;
    }
    
    &:before {
      content: none;
    }
  }

  .slick-next {
    right: 20px;
  }

  .slick-prev {
    left: calc(100% - 125px);
  }
`

const CustomDotsContainer = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;

  li {
    margin: 0;
  }

  .slick-active {
    border: 1px solid #000;
    border-radius: 50%;

    li {
      background-color: #000; 
      width: 10px;
      height: 10px;
      margin: 4px 0;
    }
  } 
`

const CustomDot = styled.li<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(p) => p.active ? '#000' : '#fff'};
  border: 1px solid #000;
  cursor: pointer;
  
  &:hover {
    background-color: #000;
  }
`
