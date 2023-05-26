import { Box, Container, Grid, Typography, TextField, Card, CardActions, CardContent, CardMedia, Button, ThemeProvider, Stack } from '@mui/material/';
import TextBox from '../Components/TextCard';
import PeopleList from '../Components/PeopleList';
import theme from '../theme';
import images from '../assets/imgindex';
import { ReactComponent as Logo } from '../assets/logo-multi.svg';

const AboutPage = () => {
    const aboutText1 = "The Technological Innovations for Inclusive Learning and Teaching (tiilt) Lab aims to improve learning opportunities for students from under-served communities. We position our work as inclusive, in that we endeavor to address historic and contemporary disparities in inclusivity and social, racial and economic inequity. Furthermore, we work with teachers, students, community members and parents, in hope of supporting the development of positive learning ecosystems."
    const aboutText2 = "MusicNU is a TIILT project with the objective of changing music theory education for students by employing non-classical songs as a teaching tool. It is an interactive website that takes a chosen song from a user, analyzes the song’s chord makeup, melody, rhythm, tempo, key, and other features, and transforms it into a visual display to help students learn about the music theory of a song in a fun, visual, and accessible way. Through this project, we hope to bridge the gap between traditional music theory education and contemporary music preferences, fostering a deeper understanding and appreciation of diverse musical genres among students."

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
                <h2 style={{marginBottom:'40px'}}>About</h2>
            </div>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <a href="https://tiilt.northwestern.edu/" target="_blank" rel="noreferrer">
                    <Logo width='100%' height='300px'/></a>
                <div>
                    <TextBox name={aboutText1} width='675px' fontSize='20px' elevation='0' marginBottom='20px'></TextBox>
                    <TextBox name={aboutText2} width='675px' fontSize='20px' elevation='0' marginBottom='20px'></TextBox>
                </div>
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