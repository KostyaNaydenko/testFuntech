import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 583,
      xs: 695,
      sm: 950,
      md: 1024,
      lg: 1440,
      xl: 1918,
      xxl: 2048,
      xxxl: 3072,
    }, 
  },
});

export default theme;