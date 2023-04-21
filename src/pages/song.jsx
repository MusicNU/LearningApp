import { Box, Container, Grid, Typography, TextField} from '@mui/material/';
import NoteBox from '../Components/NoteBox';

const note_heights = {"A":1,"B":2,"C":3,"D":4};
const note_sequence = ["A","D","B","C"];
const note_comp = note_sequence.map(note => <NoteBox>note_name={note} note_height={note_heights[note]} note_number={10}</NoteBox> //use index for number
)
const SongPage = () => {
    return (//how do you use the components from the list inside the box?
            <Box>
            
                <NoteBox note_name="A"  note_height = {note_heights["A"]} note_number={10}></NoteBox>
                <NoteBox note_name="B"  note_height = {note_heights["B"]} note_number={30}></NoteBox>
                <NoteBox note_name="C"  note_height = {note_heights["C"]} note_number={50}></NoteBox>
            </Box>
    )
};

export default SongPage;