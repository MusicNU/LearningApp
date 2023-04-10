import { Box, Container, Grid, Typography, TextField} from '@mui/material/';
import ButtonComponent from '../Components/Button';
import TextBox from '../Components/TextCard';

const HomePage = () => {
    const headingText = "MusicNU"
    const width = '25%'
    const bodyText = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
    return (
        <>
            <TextBox>{headingText}</TextBox>
            <TextBox>{bodyText}</TextBox>
            <ButtonComponent></ButtonComponent>
        </>

    )
}

export default HomePage;