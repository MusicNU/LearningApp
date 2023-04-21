import Paper from '@mui/material/Paper';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import theme from '../theme';

function TextBox(props) {

return (<ThemeProvider theme={theme}>
            <Paper sx = {{       'padding':'25px',
                                'fontFamily':theme.fontFamily,
                                'textAlign':'center',
                                'width' : props.width,
                                'position':'relative',
                                'left':props.left
                                }}>
                {props.name}
            </Paper>
        </ThemeProvider>
)}

export default TextBox;