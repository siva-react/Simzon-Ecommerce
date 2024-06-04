import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperCard, SwiperCardImgHolder, SwiperCardImgWrap, SwiperCardTextHolder, SwiperContainer, SwiperHolder } from './styles';
import { Col } from 'antd';
import { CustomRow } from '@components/others';

const HomeSwiper = () => {
    const swiperData = ['fff', 'fdouhfiya', 'fdoasfuhfiyabdfgx']
    return (
        <SwiperContainer >
            <SwiperHolder
                spaceBetween={30}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination]}
            >
                {
                    swiperData?.map(item => (
                        <SwiperCard >
                            <CustomRow>
                                <Col span={24} md={12} >
                                    <SwiperCardTextHolder>
                                        <h1 >We Provide Worlds top fashion for less fashionpress.</h1>
                                        <p >FashionPress the name of the of hi class fashion Web FreePsd.</p>
                                    </SwiperCardTextHolder>
                                </Col>
                                <Col span={24} md={12} >
                                    <SwiperCardImgWrap>
                                        <SwiperCardImgHolder>
                                            <img  src="https://easydrawingguides.com/wp-content/uploads/2021/09/how-to-draw-monkey-d-luffy-from-one-peace-featured-image-1200.png" alt="Product" title='Product' />
                                        </SwiperCardImgHolder>
                                    </SwiperCardImgWrap>
                                </Col>
                            </CustomRow>
                        </SwiperCard>
                    ))
                }
            </SwiperHolder>
        </SwiperContainer>
    )
}

export default HomeSwiper
