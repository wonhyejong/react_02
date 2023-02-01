import React from 'react';
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    const pagination = {
        el:'.pagination-box',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
    return (
        <BannerSlider>
            <Swiper
                spaceBetween={0}//슬라이더 사이 마진
                slidesPerView={1} // 한번에 보여지는 슬라이더 
                modules={[Navigation, Pagination, Autoplay]}
                pagination={pagination} 
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
            
            >
            <SwiperSlide><img src="./img/slide/slide01.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./img/slide/slide02.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./img/slide/slide03.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./img/slide/slide04.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./img/slide/slide05.png" alt="" /></SwiperSlide>
            <div className='pagination-box'></div>
            </Swiper>
        </BannerSlider>
    );
};

export default Banner;

const BannerSlider=styled.div`
    width: 1200px;
    margin:1rem auto;
    & .pagination-box{
        display:flex;
        justify-content:center;
    }
    & .pagination-box .swiper-pagination-bullet{
        width:24px;
        height:24px;
        opacity:1;
        border:2px solid transparent;
        font-size:0;
    }
    & .pagination-box .swiper-pagination-bullet.swiper-pagination-bullet-active{
        border-color:#007aff
    }

    & .pagination-box .swiper-pagination-bullet:nth-of-type(1){
        background:url(./img/slide/thumb01.png) center / cover;
    }
    & .pagination-box .swiper-pagination-bullet:nth-of-type(2){
        background:url(./img/slide/thumb02.png) center / cover;
    }
    & .pagination-box .swiper-pagination-bullet:nth-of-type(3){
        background:url(./img/slide/thumb03.png) center / cover;
    }
    & .pagination-box .swiper-pagination-bullet:nth-of-type(4){
        background:url(./img/slide/thumb04.png) center / cover;
    }
    & .pagination-box .swiper-pagination-bullet:nth-of-type(5){
        background:url(./img/slide/thumb05.png) center / cover;
    }

`