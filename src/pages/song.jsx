import theme from '../theme';
import ProgressBar from '../Components/ProgressBar';

const SongPage = () => {
    return(
        <>
        <div class='center'>
            <ProgressBar progress={70} length={120}/>
        </div>
        </>
    )
}

export default SongPage