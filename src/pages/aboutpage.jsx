import { Box, Container, Grid, Typography, TextField } from '@mui/material/';
import ButtonComponent from '../Components/Button';
import TextBox from '../Components/TextCard';
import { ThemeProvider } from '@mui/material/';
import theme from '../theme';
import { ReactComponent as Logo } from '../logo-multi.svg';

const AboutPage = () => {
    const heading = "About"
    const aboutText = "testing a long paragraph with words about tiilt maybe also a link to the tiilt website? also the tiilt website has been giving me a cert warning lately idk if its just me more words with words for testing about tiilt: tiilt is cool! with coolr people and cool projects"

    return(
    <>
        <ThemeProvider theme={theme}>
            <TextBox name={heading} width='50%' left='25%' fontSize='50px' marginTop='25px' elevation='0'></TextBox>
            <div style={{position: 'absolute'}}><Logo width='100%' marginTop='25px'/></div>
            <TextBox name={aboutText} width='30%' left='50%' fontSize='20px' elevation='0'></TextBox>
            <TextBox name={'Meet Us!'} width='50%' left='25%' fontSize='50px' marginTop='70px' elevation='0'></TextBox>
        </ThemeProvider>
    </>
    )
}

export default AboutPage