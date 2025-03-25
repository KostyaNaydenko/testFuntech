import React from "react";
import { Dialog, Divider, IconButton, Slide, Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Header } from "./Header";
import { ConnectButton, NavigationButton } from "../../../../styles/styled";
import FooterIcons from "../Footer/FooterIcons";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

const HeaderModal = ({ open, close }) => {
    console.log(close);
    return (<>
        <Dialog
            fullScreen
            open={open} 
            onClose={close}
            TransitionComponent={Transition} >

            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh'}} >
            <Box>
            <Header openProps={open} />
            <IconButton onClick={close} sx={{position: 'absolute', top: '39px', left: '320px', zIndex: 1000 }} >
                <CloseIcon></CloseIcon>
            </IconButton>
            <Divider width={'320px'} sx={{ marginLeft: '27px', marginBottom: '44px'}} />
            <nav style={{display: 'flex', flexDirection: 'column', gap: '20px', marginLeft: '20px',}} >
                        <NavigationButton>DISCOVER</NavigationButton>
                        <NavigationButton>CREATOR</NavigationButton>
                        <NavigationButton>SELL</NavigationButton>
                        <NavigationButton>STATS</NavigationButton>
                    </nav>
                    <FooterIcons marginLeft='12px' marginTop="40px"  />

            </Box>
            </Box>
                    <ConnectButton style={{marginLeft: '29px', marginRight: '29px',  marginBottom: '40px', scale: 1}}>CONNECT WALLET</ConnectButton>

        </Dialog>
        </>
    );
};

export default HeaderModal;