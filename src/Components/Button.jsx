
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme} from '@mui/material/styles';


export default function ButtonComponent() {
  const theme = useTheme();
  return (
      <Box component="span" sx={{ 'position':'relative',
                                  'left':'37.5%'}}>
        <Button sx = {{width: '25%',
                      textAlign: 'center',
                      color: 'primary'
                      }}>Take me there</Button>
      </Box>

      

  );
}

