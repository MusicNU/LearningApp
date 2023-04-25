import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#486284',
      light: '#FFFFFF',
    },
    secondary: {
      main: '#486284',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    }},
  typography: {
    fontFamily: [
      'Candara',
      'sans-serif'
		].join(','),
  }})

export default theme;