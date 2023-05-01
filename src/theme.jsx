import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#465d87', //purple: #41378a blue: #486284
      light: '#FFFFFF',
    },
    secondary: {
      main: '#486284',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    }},
  typography: {
    fontFamily: [
      'Nunito',
      'sans-serif'
		].join(','),
  }})

export default theme;