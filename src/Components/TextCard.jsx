import Paper from '@mui/material/Paper';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import theme from '../theme';

function TextBox(props) {

return (<ThemeProvider theme={theme}>
    <Paper elevation={props.elevation} 
    sx={{
        'fontFamily': theme.typography.fontFamily,
        'fontSize': props.fontSize,
        'color': theme.palette.primary.main,
        'textAlign': 'center',
        'width': props.width,
        'position': 'relative',
        'left': props.left,
        'marginTop': props.marginTop,
        'backgroundColor': 'transparent',
        'marginBottom': props.marginBottom
    }}>
        {props.name}
    </Paper>
        </ThemeProvider>
)}

export default TextBox;