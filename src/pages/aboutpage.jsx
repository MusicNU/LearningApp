import { Box, Container, Grid, Typography, TextField, Card, CardActions, CardContent, CardMedia, Button, ThemeProvider, Stack } from '@mui/material/';
import TextBox from '../Components/TextCard';
import theme from '../theme';
import images from '../assets/imgindex';
import { ReactComponent as Logo } from '../assets/logo-multi.svg';

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
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', marginBottom: '60px', alignContent: 'space-evenly', rowGap: '40px'}}>
                <Card sx={{ width: '300px' }} className='card'>
                    <CardContent>
                        <h3>Person 1</h3>
                        <h4>Front-End & Music Visualization</h4>
                        <CardMedia className="img" component="img" height="280" src={images.sushi}/>
                        <p>Hello I'm Person 1 and I work at MusicNU. This is some basic information about me as a placeholder right now if you are someone else and reading this, hello! i am putting more text and more text and more text and more text</p>
                    </CardContent>
                </Card>

                <Card sx={{ width: '300px' }} className='card'>
                    <CardContent>
                        <h3>Person 1</h3>
                        <h4>Front-End & Music Visualization</h4>
                        <CardMedia className="img" component="img" height="280" src={images.sushi}/>
                        <p>Hello I'm Person 1 and I work at MusicNU. This is some basic information about me as a placeholder right now if you are someone else and reading this, hello! i am putting more text and more text and more text and more text</p>
                    </CardContent>
                </Card>

                <Card sx={{ width: '300px' }} className='card'>
                    <CardContent>
                        <h3>Person 1</h3>
                        <h4>Front-End & Music Visualization</h4>
                        <CardMedia className="img" component="img" height="280" src={images.sushi}/>
                        <p>Hello I'm Person 1 and I work at MusicNU. This is some basic information about me as a placeholder right now if you are someone else and reading this, hello! i am putting more text and more text and more text and more text</p>
                    </CardContent>
                </Card>

                <Card sx={{ width: '300px' }} className='card'>
                    <CardContent>
                        <h3>Cool Person</h3>
                        <h4>Cool Job</h4>
                        <CardMedia className="img" component="img" height="280" src={images.sushi}/>
                        <p>Hello I'm Person 1 and I work at MusicNU. This is some basic information about me as a placeholder right now if you are someone else and reading this, hello! i am putting more text and more text and more text and more text.</p>
                    </CardContent>
                </Card>

                <Card sx={{ width: '300px' }} className='card'>
                    <CardContent>
                        <h3>Person 1</h3>
                        <h4>Front-End & Music Visualization</h4>
                        <CardMedia className="img" component="img" height="280" src={images.sushi}/>
                        <p>Hello I'm Person 1 and I work at MusicNU. This is some basic information about me as a placeholder right now if you are someone else and reading this, hello! i am putting more text and more text and more text and more text</p>
                    </CardContent>
                </Card>
            </Box>
        </ThemeProvider>
    </>
    )
}

export default AboutPage