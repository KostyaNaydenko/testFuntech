import React from "react";
import Card from "../../Card/Card";
import card_image_1 from '../../../../../../public/Images/card_image_1.jpeg';
import card_image_2 from '../../../../../../public/Images/card_image_2.jpeg';
import card_image_3 from '../../../../../../public/Images/card_image_3.jpeg';
import card_image_4 from '../../../../../../public/Images/card_image_4.jpeg';
import { SwiperSlide } from "swiper/react";
import SwiperNavigation from "./SwiperNavigation";
import { SwiperBox, SwiperTitle, SwiperBoxWidth, SwiperBoxShadow, StyledSwiper } from "../../../../../styles/styled";

const Swiper = () => {

    const items = [
        {
            id: '1',
            img: <img src={card_image_1} style={{width:'253px', height:'253px', borderRadius:'23.48px', position: 'absolute', zIndex: 0}} />
        },
        {
            id: '2',
            img: <img src={card_image_2} style={{width:'253px', height:'253px', borderRadius:'23.48px', position: 'absolute', zIndex: 0}} />
        },
        {
            id: '3',
            img: <img src={card_image_3} style={{width:'253px', height:'253px', borderRadius:'23.48px', position: 'absolute', zIndex: 0}} />
        },
        {
            id: '4',
            img: <img src={card_image_4} style={{width:'253px', height:'253px', borderRadius:'23.48px', position: 'absolute', zIndex: 0}} />
        },
        {
            id: '5',
            img: <img src={card_image_2} style={{width:'253px', height:'253px', borderRadius:'23.48px', position: 'absolute', zIndex: 0}} />
        },
        {
            id: '6',
            img: <img src={card_image_1} style={{width:'253px', height:'253px', borderRadius:'23.48px', position: 'absolute', zIndex: 0}} />
        },
        {
            id: '7',
            img: <img src={card_image_4} style={{width:'253px', height:'253px', borderRadius:'23.48px', position: 'absolute', zIndex: 0}} />
        },
        {
            id: '8',
            img: <img src={card_image_2} style={{width:'253px', height:'253px', borderRadius:'23.48px', position: 'absolute', zIndex: 0}} />
        },
        {
            id: '9',
            img: <img src={card_image_3} style={{width:'253px', height:'253px', borderRadius:'23.48px', position: 'absolute', zIndex: 0}} />
        },
        {
            id: '10',
            img: <img src={card_image_1} style={{width:'253px', height:'253px', borderRadius:'23.48px', position: 'absolute', zIndex: 0}} />
        },
        {
            id: '11',
            img: <img src={card_image_1} style={{width:'253px', height:'253px', borderRadius:'23.48px', position: 'absolute', zIndex: 0}} />
        },
        {
            id: '12',
            img: <img src={card_image_4} style={{width:'253px', height:'253px', borderRadius:'23.48px', position: 'absolute', zIndex: 0}} />
        },
        {
            id: '13',
            img: <img src={card_image_4} style={{width:'253px', height:'253px', borderRadius:'23.48px', position: 'absolute', zIndex: 0}} />
        },
    ];

    return (
        <SwiperBox >
            <SwiperBoxShadow />
                <SwiperTitle component="h2" >
                    Weekly-Top NFT
                </SwiperTitle>
              <SwiperBoxWidth > 
            <StyledSwiper
                    centeredSlidesBounds={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    spaceBetween={40}
                    loop={true}
                    mousewheel
                    keyboard
                    grabCursor
                >
                    {items.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Card img={item.img} />
                        </SwiperSlide>
                    ))}
                    <SwiperNavigation />
                </StyledSwiper>

            </SwiperBoxWidth> 
        </ SwiperBox>
)};

export default Swiper;