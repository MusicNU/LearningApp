import theme from '../theme';
import ProgressBar from '../Components/ProgressBar';
import MusicPlayerSlider from '../Components/MusicPlayer';

const SongPage = () => {
    return(
        <>
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