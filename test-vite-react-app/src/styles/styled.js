import { Box, Link, styled, Typography } from "@mui/material";
import { Swiper } from "swiper/react";


export const Main = styled('main')(({theme})=>({
  width: '100%',
  height: '100%',
  position: 'relative',
  background: '#FFF',
    
    [theme.breakpoints.down('lg')]: {
      transformOrigin: 'left top',
      scale: '0.7',
      width: '142.4vw',
      marginBottom: '-576px',
    },

}));

export const BackgroundAppBar = styled('div')(({theme})=>({
  paddingTop: '28px',
  paddingLeft: '97px',
  paddingRight: '97px',
  borderBottomRightRadius: '20px',
  borderBottomLeftRadius: '20px',

  [theme.breakpoints.up('xl')]: {
    paddingTop: '17px',
  },

}))

export const AppBar = styled('header')(({theme})=>({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  paddingTop: '17px',
  paddingLeft: '97px',
  paddingRight: '97px',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  backgroundColor: '#FFF', 
  borderBottomRightRadius: '20px', 
  borderBottomLeftRadius: '20px', 
  paddingBottom: '17px', 

  [theme.breakpoints.up('xl')]: {
    paddingLeft: '336px',
    paddingRight: '336px',
  },

  [theme.breakpoints.down('lg')]: {
    paddingLeft: '47px',
    paddingRight: '47px',
  },

  [theme.breakpoints.down('sm')]: {
    paddingTop: '0px',
    paddingLeft: '8px',
    paddingRight: '8px',
  },
  }));

export const Nav = styled('nav')(({theme})=>({  
  marginLeft: '2.39vw',
  display: 'flex',
  height: '27px',
  alignItems: 'center',
  
  [theme.breakpoints.down('lg')]: {
    transformOrigin: 'left',
    scale: '0.7',
  },
  }));

export const ConnectButton = styled('button')(({theme})=>({
  fontFamily: 'inter',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '22px',
  letterSpacing: '0%',
  backgroundColor: '#141416',
  color: '#FFF',
  minWidth: '200px',
  minHeight: '54px',
  borderRadius: '16px',
  borderWidth: '1px',

  [theme.breakpoints.down('lg')]: {
    transformOrigin: 'right',
    scale: '0.7',
  },

  [theme.breakpoints.up('xl')]: {
    marginLeft: '100px',
  }, 
}));

export const NavigationButton = styled('button')(({theme})=>({
  color: "rgba(96, 96, 96, 1)",
  background: '#FFF',
  fontFamily: 'Inter',
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '26.74px',
  letterSpacing: '0%',
  textTransform: 'uppercase',
  width: '131px',
  height: '43px',
  
  '&:hover': {
    borderRadius: '10px',
    transition: 'background-color 0.5s ease', background: 'rgba(195, 195, 195, 1)', 
  },

  [theme.breakpoints.down('sm')]: {
    borderRadius: '0px',
    transition: 'none',
    width: '0px',
    fontWeight: 500,
    fontSize: "40px",
    lineHeight: "42px",
    letterSpacing: "0%",
  },
}));

export const TemplatePage = styled('div')({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'space-between',
  justifyContent: 'center',
})

export const ContainerHeaderAll = styled('div')(({theme})=>({
  display:'flex',  
  paddingLeft: '97px',
  gap: '49px',
  marginBottom: '170px',

  [theme.breakpoints.down('lg')]: {
    paddingLeft: '67px',
    marginBottom: '114px',
  },

  [theme.breakpoints.up('xl')]: {
    paddingLeft: '336px',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  [theme.breakpoints.down('xxs')]: {
    textAlign: 'start',
    marginRight: '50px',
  },

  [theme.breakpoints.up('xxl')]: {
    paddingLeft: '340px',
  },

  [theme.breakpoints.up('xxxl')]: {
    scale: '1.1',
    paddingLeft: '450px',
  },
}))

export const ContainerHeaderImages = styled(Box)(({ theme }) => ({
  width: '780px',
  height: '543px',
  position: 'relative',
  marginTop: '96px',

  [theme.breakpoints.down('lg')]: {
    marginLeft: '40px',
  },

  [theme.breakpoints.down('xs')]: {
    scale: '0.67',
  },

  [theme.breakpoints.down('xxs')]: {
    marginRight: '0px',
  },

  [theme.breakpoints.up('xxxl')]: {
    marginLeft: '500px',
  },
}));

export const TypographyHeaderContent = styled(Box)(({theme})=>({
  width: '567px', 
  height: '366px', 
  marginTop: '10px',

  [theme.breakpoints.down('sm')]: {
    display: 'flex ',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
}))

export const HeaderContentImage_1 = styled('img')(({theme})=>({
  width: '391px', 
  height: '395px', 
  borderRadius: '25px', 
  objectFit: 'cover',
  marginTop: '14px', 
  position: 'absolute', 
  right: '390px',
  left: '0px',
}))

export const HeaderContentImage_2 = styled('img')(({theme})=>({
  position: 'absolute',
  width: '128.78px',
  height: '124.22px',
  right: '0px',
  left: '390px',
  top: '58px',
  marginLeft: '22px',
  transform: 'rotate(-3.08deg)',
  marginRight: '63.03px',
}))

export const HeaderContentImage_3 = styled('img')(({theme})=>({
  position: 'absolute', 
  zIndex: '0', 
  top: '0px', 
  right: '0px',
  left: '620px',
  width: '173px', 
  height: '400px', 
  zIndex: 0,

}))

export const HeaderContentImage_4 = styled('img')(({theme})=>({
  width: '320px', 
  height: '322px',
  position: 'absolute', 
  borderRadius: '22px', 
  marginTop: '4.72px', 
  top: '186px' ,
  right: '26px',
  left: '390px',
  objectFit: 'cover',
  marginLeft: '38.67px',
  zIndex: 500,
}))

export const HeaderContentImage_4Blur = styled(HeaderContentImage_4)(({theme})=>({
  top: '188px', 
  zIndex: 0, 
  filter: 'blur(21px)', 
  left: '400px', 
  [theme.breakpoints.down('lg')]: {
    marginLeft: '12px',
  },
}))

export const FooterBoxWidth = styled('div')(({theme})=>({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '#141416',
  paddingLeft: '97px',
  paddingTop: '88px',
  paddingBottom: '86px',
  paddingRight: '97px',
  width: '100%',

  [theme.breakpoints.down('lg')]: {
    paddingTop: '60px',
    paddingRight: '69px',
    paddingLeft: '69px',
    paddingBottom: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
  },

  [theme.breakpoints.up('xl')]: {
    paddingLeft: '336px',
    paddingRight: '336px',
  },

  [theme.breakpoints.down('sm')]: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },

  [theme.breakpoints.up('xxl')]: {
    paddingLeft: '436px',
    paddingRight: '436px',
  },
}))

export const BannerContent = styled('div')(({theme})=>({
  backgroundColor: '#141416',
  borderRadius: '30px',
  marginTop: '0px',
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    flex: 'none',
    height: '350px',
    width: '100%',
  },
}));

export const BannerContainer = styled('div')(({theme})=>({
  position: 'relative',
  paddingLeft: '97px',
  paddingRight: '97px',
  paddingTop: '120px',
  paddingBottom: '120px',
  backgroundColor: '#FFF',
  display:'flex',

  [theme.breakpoints.up('xl')]: {
    paddingLeft: '336px',
    paddingRight: '336px',
    paddingTop: '120px',
    paddingBottom: '120px',
  },

  [theme.breakpoints.down('lg')]: {
    paddingTop: '90px',
    paddingBottom: '90px',
    paddingLeft: '67px',
    paddingRight: '67px',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    paddingLeft: '42px',
    paddingRight: '30px',
    paddingTop: '70px',
    paddingBottom: '153px',
  },

  [theme.breakpoints.up('xxl')]: {
    paddingLeft: '420px',
    paddingRight: '420px',
    paddingTop: '290px',
    paddingBottom: '290px',
  },

  [theme.breakpoints.up('xxxl')]: {
    paddingLeft: '720px',
    paddingRight: '720px',
    paddingTop: '90px',
    paddingBottom: '90px',
    scale: '1.2',
  },

}));

export const SwiperBoxShadow = styled(Box)(({theme})=>({

  [theme.breakpoints.down('lg')]: {
    position: 'absolute',
    backgroundColor: 'rgba(241, 241, 241, 1)',
    width: '210%',
    top: '0px', 
    left: '-800px',
    height: '100%', 
    zIndex: '-1',
  },   
}));

export const SwiperBox = styled(Box)(({theme})=>({
  position: 'relative',
  display: 'flex', 
  flexDirection: 'column',  
  justifyContent: 'center', 
  alignItems: 'center',
  backgroundColor: 'rgba(241, 241, 241, 1)',
  
  [theme.breakpoints.down('lg')]: {
    backgroundColor: 'none',
  },

  [theme.breakpoints.up('xxxl')]: {
    //marginRight: '1368px',
  },
}))

export const StyledSwiper = styled(Swiper)(({ theme }) => ({
  '& .swiper-wrapper': {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '395',

    [theme.breakpoints.up('xxl')]: {
      width: '200%',
    },

  },
  '& .swiper-slide': {
    width: 'auto',
  [theme.breakpoints.down('lg')]: {
    marginTop: '20px',
    marginLeft: '20px',
  },
  },
  
  
  
}));

export const SwiperBoxNavigationContent = styled(Box)(({theme})=>({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '70px',
  marginBottom: '70px',

    [theme.breakpoints.down('lg')]: {
      marginTop: '50px',
      marginBottom: '50px',
      marginLeft: '34px',
  },
}))

export const SwiperTitle = styled(Typography)(({theme})=>({
    color: "rgba(197, 197, 197, 1)",
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: '46px',
    lineHeight: '48px',
    letterSpacing: '1.5px',
    textAlign: 'center',
    verticalAlign: 'middle',
    marginTop: '70px',
    marginBottom: '70px',

    [theme.breakpoints.down('lg')]: {
      marginTop: '50px',
      marginBottom: '50px',
    },
}));

  export const SwiperBoxWidth = styled(Box)(({theme})=>({
    width: '100%',

    [theme.breakpoints.down('lg')]: {
      //width: '160%',
      //marginRight: '-30px',
    },
  }))

  export const AppBarImg = styled('img')(({theme})=>({
    height: '53px', 
    width: '53px',
    border: 'none',
    background: 'none', 
    padding: 0, 
    marginLeft: '0px',
    
    [theme.breakpoints.down('lg')]: {
      scale: '0.7',
  },
}))

export const HeaderContentButtonBlack = styled('button')(({theme})=>({
  fontFamily: 'Poppins',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '100%',
  letterSpacing: '1%',
  width: '180px',
  height: '60px',
  marginRight: '22px',
  borderRadius: '12px',
  backgroundColor: '#000000',
  color: '#FFF',
  //overflow: 'hidden',

  '&:hover': {
    backgroundColor: 'rgba(34, 34, 34, 1)',
    transition: 'background-color 0.5s ease',
  },
}));

export const HeaderContentButtonWhite = styled('button')(({theme})=>({
  fontFamily: 'Poppins',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '100%',
  letterSpacing: '1%',
  backgroundColor: '#FFF',
  color: '#000000',
  width: '140px',
  height: '60px',
  borderRadius: '12px',
  border: '2px solid #000000',

  '&:hover': {
    backgroundColor: 'rgba(215, 215, 215, 1)',
    transition: 'background-color 0.5s ease',
  },
}));

export const BannerButtonWhite = styled('button')(({theme})=>({
  fontFamily: 'outfit',
  marginRight: '24px',
  width: '180px',
  height: '68px',
  borderRadius: '12px',
  fontWeight: 600,
  fontSize: '21.36px',
  lineHeight: '130%',
  letterSpacing: '1%',
  backgroundColor: '#FFF',

  '&:hover': {
    backgroundColor: 'rgba(242, 242, 242, 1)',
    transition: 'background-color 0.5s ease',
  },
}));

export const BannerButtonBlack = styled('button')(({theme})=>({
  width: '180px',
  height: '68px',
  borderRadius: '12px',
  fontFamily: 'outfit',
  fontWeight: 600,
  fontSize: '21.36px',
  lineHeight: '130%',
  letterSpacing: '1%',
  backgroundColor: '#141416',
  color: '#fff',
  border: '2px solid #FFF',

  '&:hover': {
    backgroundColor: 'rgba(215, 215, 215, 1)',
    color: 'rgba(26, 26, 26, 1)',
    transition: 'color 0.5s ease',
    transition: 'background-color 0.5s ease',
  },
}))

export const FooterLink = styled(Link)(({theme})=>({
  fontFamily: 'Inter',
  fontWeight: 500,
  fontSize: '17.83px',
  lineHeight: '26.74px',
  letterSpacing: '0%',
  textTransform: 'capitalize',
  color: 'rgba(185, 185, 185, 1)',
  textDecoration: 'none',
}))

export const FooterTopLinksBox = styled(Box)(({theme})=>({
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center',
  marginBottom: '20px',

  [theme.breakpoints.down('lg')]: {
    transformOrigin: 'left',
    width: '142.7%',
    scale: '0.7',
    marginBottom: '0px',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
})) 

export const FooterTopLinksRightBox = styled(Box)(({theme})=>({
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  width: '635px',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '30px',
    marginTop: '30px',
  },
}))

export const FooterIconsBox = styled(Box)(({theme})=>({
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'end', 
  width: '216px', 

}))

export const FooterBottomLinksBox = styled(Box)(({theme})=>({
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  marginTop: '57px',

  [theme.breakpoints.down('lg')]: {
    transformOrigin: 'left',
    width: '143.5%',
    scale: 0.7,
  },
}))

export const BannerImage = styled('img')(({theme})=>({
  maxWidth: '369px', 
  borderRadius: '25px',

  [theme.breakpoints.down('sm')]: {
    height:'249px', 
    left: '-48px',
    top: '20px', 
    bottom: '0px', 
    right: '0px', 
    position: 'absolute',
    marginTop: '30px',
    marginBottom: '30px',
    boxShadow: '0px 3px 45px rgba(255, 255, 255, 1)',
  },
}))

export const BannerContentAndImageBox = styled(Box)(({theme})=>({
  paddingTop: '31px',
  paddingRight: '31px',
  paddingBottom: '31px',
  paddingLeft: '66px',
  display: 'flex',
  justifyContent: 'space-between',
  flex: 1,

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center', 
    flex: 'none',
    justifyContent: 'center', 
    paddingLeft: '0px',
    paddingRight: '0px',

  },
}))
