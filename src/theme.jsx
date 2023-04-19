import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#11cb5f',
    },
    secondary: {
      
      main: '#11cb5f',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    }},
  typography: {
    fontFamily: [
			"Times New Roman",
			"Arial",
			"sans-serif",
		].join(',')
  }})

export default theme;