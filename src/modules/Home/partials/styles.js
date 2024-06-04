import styled from "styled-components";
import { THEME } from "@theme/index";
import { images } from "@assets/images";
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperContainer = styled.div`
  width: 100%;
  max-width:100%;
  background-image: url(${images.SWIPERBACKGROUND});
  background-size: cover;
  background-position: center;
`

export const SwiperHolder = styled(Swiper)`
  height: 70vh;
`
export const SwiperCard = styled(SwiperSlide)`
 width: 100%;
 padding: 10px 20px;
 display: flex;
   align-items: center;
   justify-content: center;
 
 @media ${THEME.TABLET} {
   padding: 20px 40px;
 }
`

export const SwiperCardTextHolder = styled.div`
 display: flex;
 flex-direction: column;
 text-align: center;
 align-items: center;
 justify-content: center;
 gap: 20px;
 font-size: 16px;
 height: 100%;
 padding: 20px 0px;

 
 h1 , p {
  color: #ffffff;
 }
 @media ${THEME.TABLET} {
  font-size: 20px;
 }
`
export const SwiperCardImgWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;

`

export const SwiperCardImgHolder = styled.div`
border-radius: 50%;
height: 250px;
width: 250px;
background-color:#ffffff;
display: flex;
align-items: center;
justify-content: center;
img {
  width: 200px;
}
overflow: hidden;

 @media ${THEME.TABLET} {
height: 400px;
width: 400px;
img {
  width: 350px;
}

 }
`