import { createTheme } from '@mui/material/styles';
/* COLOR PALETTE */
/* black-ish #222831*/
/* gray-ish #393E46*/
/* blue #00ADB5*/
/* white #EEEEEE*/

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#00ADB5',
      darker: '#00ADB5',
    },
    secondary: {
        main: '#222831',
        darker: '#393E46'
    },
    neutral: {
      main: '#F7FBFC',
      contrastText: '#EEEEEE',
    },
  },
});

export default theme