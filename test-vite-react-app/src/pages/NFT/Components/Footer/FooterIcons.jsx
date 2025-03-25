import React from "react";
import { FooterIconsBox } from "../../../../styles/styled";
import { IconButton } from "@mui/material";
import { Instagram, LinkedIn, Facebook, Twitter } from '@mui/icons-material';

const FooterIcons = ({marginLeft='70px', marginTop='0px'}) => (
    <>
        <FooterIconsBox marginLeft={marginLeft} marginTop={marginTop} >
            <IconButton>
                <Instagram sx={{color: 'rgba(83, 83, 83, 1)', '&:hover': {color: 'rgba(255, 255, 255, 1)', transition: 'color 0.3s ease', }}} />
            </IconButton>

            <IconButton>
                <LinkedIn sx={{color: 'rgba(83, 83, 83, 1)', '&:hover': {color: 'rgba(255, 255, 255, 1)', transition: 'color 0.3s ease',  }}} />
            </IconButton>

            <IconButton>
                <Facebook sx={{color: 'rgba(83, 83, 83, 1)', '&:hover': {color: 'rgba(255, 255, 255, 1)', transition: 'color 0.3s ease',  }}} />
            </IconButton>
            <IconButton>
                <Twitter sx={{color: 'rgba(83, 83, 83, 1)', '&:hover': {color: 'rgba(255, 255, 255, 1)', transition: 'color 0.3s ease',  }}} />
            </IconButton>
        </FooterIconsBox>
    </>
    );

export default FooterIcons;