import React from "react";
import bannerImage from "../../../../../public/Images/bannerImage.png";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { BannerButtonBlack, BannerButtonWhite, BannerContainer, BannerContent, BannerContentAndImageBox, BannerImage } from "../../../../styles/styled";
const Banner = () => {

    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <BannerContainer>
            <BannerContent>
                <BannerContentAndImageBox>
                    <Box marginTop={'17px'}>

                        <Typography sx={{
                            marginLeft: isSm ? '30px': 0,
                            fontWeight: 600,
                            fontSize: isSm ? '30px' : '45px',
                            lineHeight: '48px',
                            letterSpacing: '1%',
                            color: '#FFF',
                            marginBottom: '20px',
                            marginRight: '30px',
                            lineHeight: '24px',}}>
                            Create and Sell NFTs
                        </Typography>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            fontSize: '20px',
                            lineHeight: '22px',
                            letterSpacing: '0%',
                            color: 'rgba(212, 212, 212, 0.5)',
                            marginBottom: '57px',}}>
                            World’s Largest NFT Place
                        </Typography>
                        
                        <Box width={'384px'} height={'68px'} >
                            <BannerButtonWhite>Explore More</BannerButtonWhite>
                            <BannerButtonBlack>Sell Artwork</BannerButtonBlack>
                        </Box>

                    </Box>
                
                    {isSm &&
                    <Box position={'relative'} width={'259px'} height={'275px'} >
                        <BannerImage src={bannerImage} />
                    </Box>}

                    {!isSm && <BannerImage src={bannerImage} />}

                </BannerContentAndImageBox>
            </BannerContent>
        </BannerContainer>
)};

export default Banner;