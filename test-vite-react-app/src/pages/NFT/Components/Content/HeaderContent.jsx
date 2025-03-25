import React, { useEffect, useState } from "react";
import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import pixels from '../../../../../public/Images/image.png';
import headerContentArrow from '../../../../../public/Images/headerContentArrow.png'; 
import headerContentImage_1 from '../../../../../public/Images/headerContentImage_1.jpeg';
import headerContentImage_2 from '../../../../../public/Images/headerContentImage_2.jpeg';
import { ContainerHeaderAll, 
        ContainerHeaderImages, 
        HeaderContentButtonBlack, 
        HeaderContentButtonWhite, 
        HeaderContentImage_1, 
        HeaderContentImage_2, 
        HeaderContentImage_3, 
        HeaderContentImage_4, 
        HeaderContentImage_4Blur, 
        TypographyHeaderContent } from "../../../../styles/styled";

const HeaderContent = () => {
    const [isVisible, setIsVisible ] = useState(false);
    const [isVisibleArrow, setIsVisibleArrow ] = useState(false);
    const [isVisibleH, setIsVisibleH ] = useState(false);
    const [isVisibleP, setIsVisibleP ] = useState(false);
    const [isVisibleS, setIsVisibleS ] = useState(false);

    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    const style = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
    }

    const arrowStyle = {
        opacity: isVisibleArrow ? 1 : 0,
        transform: isVisibleArrow ? 'translateX(0)' : 'translateX(100%)',
        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
    }

    const hStyle = {
        opacity: isVisibleH ? 1 : 0,
        transform: isVisibleH ? 'translateX(0)' : 'translateX(100%)',
        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
    }

    const pStyle = {
        opacity: isVisibleP ? 1 : 0,
        transform: isVisibleP ? 'translateX(0)' : 'translateX(100%)',
        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
    }

    const sStyle = {
        opacity: isVisibleS ? 1 : 0,
        transform: isVisibleS ? 'translateX(0)' : 'translateX(100%)',
        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
    }

    useEffect(() => {

        setTimeout(() => setIsVisible(true), 300);
        setTimeout(() => setIsVisibleArrow(true), 1160); 
        setTimeout(() => setIsVisibleH(true), 200);
        setTimeout(() => setIsVisibleP(true), 300);
        setTimeout(() => setIsVisibleS(true), 500);
}, []);

    return (
        <ContainerHeaderAll>
        <Box height={'366px'} marginTop={ isSm ? '0px' : '98px' } >
            <Divider width={ isSm ? '515px': "195px" } sx={{ marginLeft: isSm ?'20px' : '0px' }} />
            <TypographyHeaderContent paddingTop={ isSm? '72px': 0 } >

                <Box display={isSm ? 'flex' : 'block'} flexDirection={'column'}  >
                    {isSm && <Box  position={'relative'} marginLeft={'104px'} paddingTop={'20px'} >
                        <Divider sx={{ 
                            border: '1px solid rgba(32, 31, 31, 1)', 
                            position: 'absolute' , 
                            top: '8px', 
                            width: '41px', 
                            left: '63px' }}  />
                        <Typography children={'OVER 1M CREATORS'} sx={{position: 'absolute', 
                            top: '2.4px', 
                            left: '120px', 
                            fontSize: '12px',
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            fontSize: '10px',
                            lineHeight: '12px',
                            letterSpacing: '2.4px',
                            color: 'rgba(32, 31, 31, 1)'
                            }} />
                    </Box>}
            <Typography sx={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '76px',
                lineHeight: '84px',
                letterSpacing: '-3px',
                textTransform: 'capitalize',
                marginBottom: '28px',
                ...hStyle,
            }} >
                Discover And Create NFTs
            </Typography>
            <Typography width={'490px'} component={'p'} sx={{
                fontFamily: 'Inter',
                fontWeight: '400',
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: '0px',
                height: '56px', 
                marginLeft: '40px',
                color:  'rgba(103, 103, 103, 1)',
                ...pStyle,
            }}>
                Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a $20 bonus.
            </Typography>
            </Box>

            <Box  sx={{...sStyle, display: 'flex', marginTop: '44px', }} >
                <HeaderContentButtonBlack >EXPLORE MORE</HeaderContentButtonBlack>
                <HeaderContentButtonWhite >CREATE NFT</HeaderContentButtonWhite>
            </Box>
            </TypographyHeaderContent>

            <Box style={{
                marginTop: '81px',
                width: '435px',
                height: '68px',
            }} >
            {!isSm && <Box sx={{display: 'flex', justifyContent: 'space-between', width: '435px' ,...sStyle, }}>

                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start',}} >
                    <Typography sx={{
                        marginTop: '-10px',
                        fontFamily: 'Public Sans',
                        fontWeight: 600,
                        fontSize: '36px',
                        lineHeight: '42px',
                        letterSpacing: '0px',
                        marginBottom: '10px',
                    }} >
                        430K+
                    </Typography>
                    <Typography style={{
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            fontSize: '12px',
                            lineHeight: '16px',
                            letterSpacing: '0px',
                            color: '#848586',
                            }}>
                        Art Works
                    </Typography>
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                        <Typography sx={{
                        fontFamily: 'Public Sans',
                        fontWeight: 600,
                        fontSize: '36px',
                        lineHeight: '42px',
                        letterSpacing: '0px',
                        marginBottom: '10px',
                        marginTop: '-10px',
                    }} >
                        159K+
                        </Typography>
                        <Typography style={{
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            fontSize: '12px',
                            lineHeight: '16px',
                            letterSpacing: '0px',
                            textAlign: 'center',
                            color: '#848586',
                            }}>
                                Creators
                        </Typography>
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start',}}>
                        <Typography sx={{
                            fontFamily: 'Public Sans',
                            fontWeight: 600,
                            fontSize: '36px',
                            lineHeight: '42px',
                            letterSpacing: '0px',
                            textAlign: 'center',
                            marginBottom: '10px',
                            marginTop: '-10px',
                        }} >
                            87K+
                        </Typography>
                        <Typography style={{
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            fontSize: '12px',
                            lineHeight: '16px',
                            letterSpacing: '0px',
                            textAlign: 'center',
                            color: '#848586',
                        }}>
                            Collections
                        </Typography>
                    </Box>

                    </Box>}
                </Box>
            </Box>

        <ContainerHeaderImages>
            <HeaderContentImage_1 src={headerContentImage_1} style={{...style, zIndex: 1}}  />
            <HeaderContentImage_1 src={headerContentImage_1} style={{...style, top: '24px', zIndex: 0, filter: 'blur(21px)' }}  />
            <HeaderContentImage_2 src={headerContentArrow} style={{...arrowStyle}} />
            <HeaderContentImage_4 src={headerContentImage_2} style={{...style}} />
            <HeaderContentImage_4Blur src={headerContentImage_2} style={{...style,}} />
            <HeaderContentImage_3 src={pixels} style={{...style,  }} /> 
        </ContainerHeaderImages> 
    </ContainerHeaderAll>
    )
}

export default HeaderContent;