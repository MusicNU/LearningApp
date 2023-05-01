import { Box, Container, Grid, Typography, TextField, Card, CardActions, CardContent, CardMedia, Button, ThemeProvider, Stack } from '@mui/material/';
import TextBox from '../Components/TextCard';
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
                    <Logo width='100%' height='300px'/></a>
                <TextBox name={aboutText} width='600px' fontSize='20px' elevation='0'></TextBox>
            </Box>
            <div class='center'>
                <h2>Meet Us!</h2>
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', paddingBottom: '60px', alignContent: 'space-evenly', rowGap: '40px'}}>
                <Card sx={{ width: '365px' }}>
                    <CardMedia component="img" height="300" alt="Person 1" src={images}/>
                    <CardContent>
                        <h3>Person 1</h3>
                        <h4>Front-End & Music Visualization</h4>
                        <p>Hello I'm Person 1 and I work at MusicNU. This is some basic information about me as a placeholder right now if you are someone else and reading this, hello! i am putting more text and more text and more text and more text</p>
                    </CardContent>
                </Card>

                <Card sx={{ width: '365px' }}>
                    <CardMedia component="img" height="300" alt="Person 1" src={images}/>
                    <CardContent>
                        <h3>Person 1</h3>
                        <h4>Job</h4>
                        <p>Hello I'm Person 1 and I work at MusicNU. This is some basic information about me as a placeholder right now if you are someone else and reading this, hello! i am putting more text and more text and more text and more text</p>
                    </CardContent>
                </Card>

                <Card sx={{ width: '365px' }}>
                    <CardMedia component="img" height="300" alt="Person 1" src={images}/>
                    <CardContent>
                        <h3>Person 1</h3>
                        <h4>Job</h4>
                        <p>Hello I'm Person 1 and I wfdhsja flhdjkafhjklshdf dsafjdksa fjhdkshajf khdsjkalfhdjskalfh djskafl hdjskafhdslakork at MusicNU. This is some basic information about me as a placeholder right now if you are someone else and reading this, hello! i am putting more text and more text and more text and more text</p>
                    </CardContent>
                </Card>

                <Card sx={{ width: '365px' }}>
                    <CardMedia component="img" height="300" alt="Person 1" src={images}/>
                    <CardContent>
                        <h3>Person 1</h3>
                        <h4>Front-End & Music Visualization</h4>
                        <p>Hello I'm Person 1 and I work at MusicNU. This is some basic information about me as a placeholder right now because natalie is coding this and she wants to visualize it. if you are someone else and reading this, hello!</p>
                    </CardContent>
                </Card>
            </Box>
        </ThemeProvider>
    </>
    )
}

export default AboutPage