
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme} from '@mui/material/styles';


export default function ButtonComponent() {
  const theme = useTheme();
  return (
        <Button variant="contained" href="song" sx = {{width: '25%',
                      textAlign: 'center',
                      color: 'primary',
                      }}>Take me there</Button>

  );
}

