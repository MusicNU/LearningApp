import { Box, Container, Grid, Typography, TextField} from '@mui/material/';
import NoteBox from '../Components/NoteBox';

//dummy values
const note_heights = {"A":1,"B":2,"C":3,"D":4};
const note_sequence = ["A","B","C","D","E","F","G"];
//useState here
const SongPage = () => {
    return (
            <Box>
                <NoteBox note_sequence = {note_sequence}></NoteBox>
                
            </Box>
    )
};

export default SongPage;