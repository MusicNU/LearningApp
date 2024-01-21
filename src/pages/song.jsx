import theme from '../theme';
import ProgressBar from '../Components/ProgressBar';
import MusicPlayer from '../Components/MusicPlayer';
import { Button, ThemeProvider } from '@mui/material';
import NavButton from '../Components/NavButton';
import ReactAudioPlayer from 'react-audio-player';

const filename = "./hello.mp3"

import audio_file from {filename}

const SongPage = () => {
    return(
        <>
        <div className='center'>
            <NavButton addr='/musicvis' label='Melody'></NavButton>
            <NavButton addr='song/chord' label='Chord'></NavButton>
            <NavButton addr='song/rhythm' label='Rhythm'></NavButton>
        </div>
        <div className='center'>
            <ReactAudioPlayer
                src={audio_file}
                autoPlay={false}
                controls
            />
        </div>
        </>
    )
}

export default SongPage