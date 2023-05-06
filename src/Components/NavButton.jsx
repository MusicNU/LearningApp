
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import theme from '../theme';


export default function NavButton(props) {
  return (
        <Button href={props.addr} variant="text" size="large" className="button"
                sx = {{color: theme.palette.primary.main,
                  fontFamily: ['Londrina Solid','sans-serif'].join(','),
                  fontWeight: props.weight,
                  fontSize: '26px',
                  borderRadius: '25px'
                }}>{props.label}</Button>

  );
}
