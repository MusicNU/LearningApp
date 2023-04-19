import Paper from '@mui/material/Paper';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import theme from '../theme';

function TextBox(props) {

return (<ThemeProvider theme={theme}>
            <Paper sx = {{       'padding':'25px',
                                'fontFamily':theme.fontFamily,
                                'textAlign':'center',
                                'width' : '25%',
                                'position':'relative',
                                'left':'37.5%'
                                }}>
                {props.children}
            </Paper>
        </ThemeProvider>
)}

export default TextBox;