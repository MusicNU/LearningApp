import { Box, Container, Grid, Typography, TextField, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material/';
import ButtonComponent from '../Components/Button';
import TextBox from '../Components/TextCard';
import { ThemeProvider, Stack } from '@mui/material/';
import theme from '../theme';
import images from '../images/sushi.JPG';
import { ReactComponent as Logo } from '../logo-multi.svg';

const AboutPage = () => {
    const heading = "About"
    const aboutText = "MusicNU is part of The Technological Innovations for Inclusive Learning and Teaching (tiilt) lab at Northwestern University. MusicNU is part of The Technological Innovations for Inclusive Learning and Teaching (tiilt) lab at Northwestern University. MusicNU is part of The Technological Innovations for Inclusive Learning and Teaching (tiilt) lab at Northwestern University. MusicNU is part of The Technological Innovations for Inclusive Learning and Teaching (tiilt) lab at Northwestern University. MusicNU is part of The Technological Innovations for Inclusive Learning and Teaching (tiilt) lab at Northwestern University. MusicNU is part of The Technological Innovations for Inclusive Learning and Teaching (tiilt) lab at Northwestern University."

    return(
    <>
        <ThemeProvider theme={theme}>
            <div class='center'>
                <h2>About</h2>
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <a href="https://tiilt.northwestern.edu/" target="_blank" rel="noreferrer">
                    <Logo width='100%' height='300px' marginTop='100px'/></a>
                <TextBox name={aboutText} width='500px' fontSize='20px' elevation='0'></TextBox>
            </Box>
            <div class='center'>
                <h2>Meet Us!</h2>
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', paddingBottom: '50px', alignContent: 'space-evenly'}}>
                <Card sx={{ width: '360px' }}>
                    <CardMedia component="img" height="300" alt="Person 1" src={images}/>
                    <CardContent>
                        <h3>Person 1</h3>
                        <sub>position at lab</sub>
                        <body>Hello I'm Person 1 and I work at MusicNU. This is some basic information about me as a placeholder right now because natalie is coding this and she wants to visualize it. if you are someone else and reading this, hello!</body>
                    </CardContent>
                </Card>

                <Card sx={{ width: '360px' }}>
                    <CardMedia component="img" height="300" alt="Person 1" src={images}/>
                    <CardContent>
                        <h3>Person 1</h3>
                        <sub>position at lab</sub>
                        <body>Hello I'm Person 1 and I work at MusicNU. This is some basic information about me as a placeholder right now because natalie is coding this and she wants to visualize it. if you are someone else and reading this, hello!</body>
                    </CardContent>
                </Card>

                <Card sx={{ width: '360px' }}>
                    <CardMedia component="img" height="300" alt="Person 1" src={images}/>
                    <CardContent>
                        <h3>Person 1</h3>
                        <sub>position at lab</sub>
                        <body>Hello I'm Person 1 and I work at MusicNU. This is some basic information about me as a placeholder right now because natalie is coding this and she wants to visualize it. if you are someone else and reading this, hello!</body>
                    </CardContent>
                </Card>

                <Card sx={{ width: '360px' }}>
                    <CardMedia component="img" height="300" alt="Person 1" src={images}/>
                    <CardContent>
                        <h3>Person 1</h3>
                        <sub>position at lab</sub>
                        <body>Hello I'm Person 1 and I work at MusicNU. This is some basic information about me as a placeholder right now because natalie is coding this and she wants to visualize it. if you are someone else and reading this, hello!</body>
                    </CardContent>
                </Card>
            </Box>
        </ThemeProvider>
    </>
    )
}

export default AboutPage