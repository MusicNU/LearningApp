import { Box, Container, Grid, Typography, TextField } from '@mui/material/';
import ButtonComponent from '../Components/Button';
import TextBox from '../Components/TextCard';
import { ThemeProvider } from '@mui/material/';
import theme from '../theme';

const HomePage = () => {
    const headingText = "Welcome to MusicNU"
    const bodyText = "MusicNU is an interactive website that will take a chosen song from a user, transform it into a visual display, and analyze the song’s chord makeup, melody, rhythm, tempo, key, and other features to help students learn about music theory. Using Spotify’s Web API to generate song analysis, Melodia and Sonic Visualizer to extract a song’s melody, and AI/machine learning to identify chords, we will create a visual display of the song where users can learn about the music theory of the song in a fun, visual, and accessible way."
    return (
        <>
            <ThemeProvider theme={theme}>
                <TextBox name={headingText} width='50%' left='23.6%' fontSize='50px' marginTop='50px' elevation='0'></TextBox>
                <TextBox name={bodyText} width='30%' left='33.5%' fontSize='20px' elevation='0'></TextBox>
                <ButtonComponent></ButtonComponent>
            </ThemeProvider>

        </>

    )
}

export default HomePage;