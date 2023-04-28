import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; 
import { useTheme} from '@mui/material/styles';
import TextBox from '../Components/TextCard';

export default function NoteBox({note_sequence}) {

  return ( 
    <>
          {note_sequence.map(note => 
                        <TextBox name={note} 
                        width='10%' > 
                        </TextBox>)}
    </>
  );
}