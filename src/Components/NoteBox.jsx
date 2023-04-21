import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; 
import { useTheme} from '@mui/material/styles';
import TextBox from '../Components/TextCard';

export default function NoteBox({note_name, note_height, note_number}) {
  const theme = useTheme();
  return (
        <Box sx = {{width: "100%",
                      textAlign: 'center',
                      color: 'primary',
                      backgroundColor: 'white',
                      textColor: 'white'
                      }}>
                    <TextBox name={note_name} 
                            width='10%' 
                            left = {note_number*10}
                            height = {note_height}> 
                            </TextBox>    
        </Box>
  );
}