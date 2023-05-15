import { Box, Container, Grid, Typography, TextField, Card, CardActions, CardContent, CardMedia, Button, ThemeProvider, Stack } from '@mui/material/';
import TextBox from '../Components/TextCard';
import PeopleList from '../Components/PeopleList';
import theme from '../theme';
import images from '../assets/imgindex';
import { ReactComponent as Logo } from '../assets/logo-multi.svg';

const AboutPage = () => {
    const aboutText = "MusicNU is part of The Technological Innovations for Inclusive Learning and Teaching (tiilt) lab at Northwestern University. MusicNU is part of The Technological Innovations for Inclusive Learning and Teaching (tiilt) lab at Northwestern University. MusicNU is part of The Technological Innovations for Inclusive Learning and Teaching (tiilt) lab at Northwestern University. MusicNU is part of The Technological Innovations for Inclusive Learning and Teaching (tiilt) lab at Northwestern University. MusicNU is part of The Technological Innovations for Inclusive Learning and Teaching (tiilt) lab at Northwestern University. MusicNU is part of The Technological Innovations for Inclusive Learning and Teaching (tiilt) lab at Northwestern University."

    const people = [
        {name: "Person 1", job: "Front-End", img: images.sushi, bio: "Hello I'm Person 1 and I work at MusicNU. This is some basic information about me as a placeholder right now if you are someone else and reading this, hello! i am putting more text and more text and more text and more text"},
        {name: "Person 1", job: "Front-End & Music Visualization", img: images.sushi, bio: "Hello I'm Person 1 and I work at MusicNU. This is some basic information about me as a placeholder right now if you are someone else and reading this, hello! i am putting more text and more text and more text and more text"},
        {name: "Person 1", job: "Front-End & Music Visualization", img: images.sushi, bio: "Hello I'm Person 1 and I work at MusicNU. This is some basic information about me as a placeholder right now if you are someone else and reading this, hello! i am putting more text and more text and more text and more text"},
        {name: "Person 1", job: "Front-End & Music Visualization", img: images.sushi, bio: "Hello I'm Person 1 and I work at MusicNU. This is some basic information about me as a placeholder right now if you are someone else and reading this, hello! i am putting more text and more text and more text and more text"},
        {name: "Person 1", job: "Front-End & Music Visualization", img: images.sushi, bio: "Hello I'm Person 1 and I work at MusicNU. This is some basic information about me as a placeholder right now if you are someone else and reading this, hello! i am putting more text and more text and more text and more text"}
      ]

    return(
    <>
        <ThemeProvider theme={theme}>
            <div class='center'>
                <h2>About</h2>
            </div>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <a href="https://tiilt.northwestern.edu/" target="_blank" rel="noreferrer">
                    <Logo width='100%' height='300px'/></a>
                <TextBox name={aboutText} width='600px' fontSize='20px' elevation='0'></TextBox>
            </Box>

            <div class='center'>
                <h2>Meet Us!</h2>
            </div>

            <PeopleList people={people}/>
        </ThemeProvider>
    </>
    )
}

export default AboutPage