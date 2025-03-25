import { Box, Typography } from "@mui/material";
import eth_img from '../../../../../public/Images/eth.png';
import React, { useEffect, useRef } from "react";

const Card = ({img}) => {
    
    const [time, setTime] = React.useState(Math.floor(Math.random()*10)*60*60);
    const [currentBid, setCurrentBid] = React.useState((Math.random()*10).toFixed(2));
    const timer = useRef(null);

    useEffect(() => {
        if (time<=0) {
            setCurrentBid((Math.random()*10).toFixed(2));
            setTime(Math.floor(Math.random()*10)*60*60);
        }
        if (!useRef.current) {
        timer.current = setInterval(() => {
            setTime((prev)=>prev-1)

        }, 1000);
    }
        return () => clearInterval(timer.current);
    }, [time]);

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        return `${String(hours).padStart(2, '0')}h${String(minutes).padStart(2, '0')}m${String(seconds).padStart(2, '0')}s`;
    };

    return (
        <Box sx={{
            width: '281px',
            height: '385px',
            borderRadius: '24px',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            boxShadow: '0px 10px 45px rgba(199, 199, 199, 0.6)',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }} >
            <Box sx={{position: 'relative', height: '253px',}}>
            <Box sx={{zIndex: 1000, position: 'absolute', width: '115px', height: '34px', backgroundColor: 'rgba(28, 29, 32, 0.35)', right: '14px', top: '14px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1.18px solid rgba(28, 29, 32, 0.08)' }} >
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0px',
                    verticalAlign: 'middle',
                    color: '#FFF',
                }} >{formatTime(time)}</Typography>
            </Box>
            {img}
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap:'3px'}} >
            <Typography sx={{
                marginBottom: '20px',
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '22px',
                lineHeight: '24px',
                letterSpacing: '0px',
                verticalAlign: 'middle',
            }} >Sun-Glass</Typography>
            <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0px',
                    verticalAlign: 'middle',
                    color: 'rgba(148, 163, 184, 1)',
            }} >Current bid</Typography>
            <Typography sx={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '16.47px',
                lineHeight: '150%',
                letterSpacing: '0px',
                verticalAlign: 'middle',
                display: 'flex',
                alignItems: 'center',
                gap: '3.1px'
            }} ><img src={eth_img} width={'11.46px'} height={'18.49px'} />{currentBid}</Typography>
            </Box>
        </Box>
    )};

    export default Card;