import React from "react";
import { useSwiper } from "swiper/react";
import arrow_left from '../../../../../../public/Images/arrowLeft.png';
import arrow_right from '../../../../../../public/Images/arrowRight.png';
import palka from '../../../../../../public/Images/Frame.png';
import { SwiperBoxNavigationContent } from "../../../../../styles/styled";
const SwiperNavigation = () => {

    const swiper = useSwiper();

    return (
        <SwiperBoxNavigationContent>
        <div style={{
            width: 166,
            height: 64,
            top: '1552px',
            left:' 637px',
            borderRadius: '17.25px',
            padding: '20px',
            background: 'rgba(252, 252, 253, 1)',
            boxShadow: '0px 33px 25px rgba(15, 15, 15, 0.12)',

        }} > 
        <div style={{width: '110px', height:'24px', display: 'flex', gap: '38px' }}>
            <button onClick={()=> swiper.slidePrev() } >
                
               <img src={arrow_left} style={{width:'24px', height: '24px', background: 'rgba(252, 252, 253, 1)',}} />
            </button>
            
                <img src={palka} style={{
                    width: 2,
                    height: 24,
                    borderRadius: '2.16px',
                    
                }} />
               
            <button onClick={()=> swiper.slideNext() } >
               <img src={arrow_right} style={{width:'24px', height: '24px', background: 'rgba(252, 252, 253, 1)',}} />
            </button>
        </div>
        </div>
        </SwiperBoxNavigationContent>
    );
};

export default SwiperNavigation;