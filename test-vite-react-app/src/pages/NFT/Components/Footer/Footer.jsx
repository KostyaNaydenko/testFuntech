import React from "react";
import { FooterBottomLinksBox, FooterBoxWidth, FooterLink, FooterTopLinksBox, FooterTopLinksRightBox } from "../../../../styles/styled";
import  diveSeaImg from '../../../../../public/Images/diveSeaImage.png';
import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import FooterIcons from "./FooterIcons";

export const Footer = () => {

    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
            <>
                <FooterBoxWidth >
                    <FooterTopLinksBox>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            {!isSm && <>
                            <img src={  diveSeaImg } style={{width: '65px', height: '65px',}} />
                            <Typography component={'h4'} 
                                    sx={{ 
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                                fontSize: '30px',
                                lineHeight: '130%',
                                letterSpacing: '0px',
                                verticalAlign: 'middle',
                                color: 'rgba(255, 255, 255, 1)',
                                marginLeft: '10px',                          
                                }} >
                                    DiveSea
                                </Typography> </>}
                                {isSm && <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '125vw'}}>
                                <Box  sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
                                    <img src={  diveSeaImg } style={{width: '65px', height: '65px',}} />
                                    <Typography component={'h4'} 
                                                sx={{ 
                                                fontFamily: 'Poppins',
                                                fontWeight: 600,
                                                fontSize: '30px',
                                                lineHeight: '130%',
                                                letterSpacing: '0px',
                                                verticalAlign: 'middle',
                                                color: 'rgba(255, 255, 255, 1)',
                                                marginLeft: '10px', }} >
                                        DiveSea
                                    </Typography>
                                </Box>
                                <FooterIcons />
                                </Box>}
                            </Box>
                        <FooterTopLinksRightBox >
                            <FooterLink href="#" children={'Privacy Policy'} />
                            <FooterLink href="#" children={'Term & Conditions'} />
                            <FooterLink href="#" children={'About Us'} />
                            <FooterLink href="#" children={'Contact'} />
                        </FooterTopLinksRightBox>
                    </FooterTopLinksBox>

                        <Divider sx={{backgroundColor: 'rgba(129, 129, 129, 1)',}} />
                        
                        <FooterBottomLinksBox sx={isSm &&{display: 'flex', justifyContent: 'center',}} >
                        <Typography children={ !isSm ? '© 2023' : '© 2023 DiveSea All Rights Reserved.'  }    
                                    sx={{
                                    fontFamily: 'Inter',
                                    fontWeight: 500,
                                    fontSize: '17px',
                                    lineHeight: '25px',
                                    letterSpacing: '0px',
                                    color: 'rgba(153, 153, 153, 1)',
                                    display: 'flex', }} />
                        { !isSm && <FooterIcons /> }
                        </FooterBottomLinksBox>
                </FooterBoxWidth>
            </>
)};