import React, { useState } from "react";
import { AppBar, ConnectButton, NavigationButton, Nav, AppBarImg, BackgroundAppBar } from "../../../../styles/styled";
import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import HeaderModal from "./HeaderModal";
import CloseIcon from '@mui/icons-material/Close';
import waveImage from '../../../../../public/Images/Wave-logo.svg';
import menu from '../../../../../public/Images/menu.png';

export const Header = ({openProps}) => {
    const [isOpen, setOpen] = useState(false);

    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (
            <>
                <BackgroundAppBar />
                <AppBar>
                    <Box sx={{ display: 'flex', alignItems: 'center', }} >
                        <AppBarImg src={waveImage} />
                        { !isSm &&
                        <Nav>
                            <NavigationButton>DISCOVER</NavigationButton>
                            <NavigationButton>CREATOR</NavigationButton>
                            <NavigationButton>SELL</NavigationButton>
                            <NavigationButton>STATS</NavigationButton>
                        </Nav>}
                        { isSm &&
                        <Typography children={'DiveSea'} sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            fontSize: '30px',
                            lineHeight: '130%',
                            letterSpacing: '0px',
                            verticalAlign: 'middle',
                            color: '#0c0c0c',
                            marginLeft: '0px',
                        }}  />}
                    </Box>
                        { !isSm &&
                        <ConnectButton>
                            CONNECT WALLET
                        </ConnectButton>}
                        {isSm && (
                            <>
                                {!openProps && (
                                <button onClick={() => setOpen(true)} style={{ background: 'none' }}>
                                    <img style={{ scale: 0.5 }} src={menu} alt="Open Menu" />
                                </button>
                                )}
                                <HeaderModal open={isOpen} close={() => setOpen(false)} />
                            </>
                        )}
                </AppBar>
            </>
    );
};