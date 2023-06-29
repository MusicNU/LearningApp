import theme from '../theme';
import ProgressBar from '../Components/ProgressBar';
import MusicPlayerSlider from '../Components/MusicPlayer';
import { Button, ThemeProvider } from '@mui/material';
import NavButton from '../Components/NavButton';

const SongPage = () => {
    return(
        <>
        <div class='center'>
            <NavButton addr='/musicvis' label='Melody'></NavButton>
            <NavButton addr='song/chord' label='Chord'></NavButton>
            <NavButton addr='song/rhythm' label='Rhythm'></NavButton>
        </div>
        <div class='center'>
            <ProgressBar progress={70} length={120}/>
        </div>
        <div class='center'>
            <MusicPlayerSlider/>
        </div>
        </>
    )
}

export default SongPage