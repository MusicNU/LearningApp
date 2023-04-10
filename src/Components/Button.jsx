import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ButtonComponent() {
  return (
    <Box component="span" sx={{ p: 2, 
                                border: '1px dashed grey',
                                'position':'relative',
                                'left':'37.5%'}}>
      <Button sx = {{width: '25%',
                    textAlign: 'center',
                    }}>Get Started</Button>
    </Box>
  );
}

