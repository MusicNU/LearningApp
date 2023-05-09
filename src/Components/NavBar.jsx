import { Box, Button, Grid, Stack } from '@mui/material';
import NavButton from '../Components/NavButton';
import theme from '../theme';


function NavBar({links}) {
	return (
		//purple rgba(65, 55, 138, 0.3)
		//blue rgba(72, 98, 132, 0.3)
		<Box sx={{ py: 0.5, px: 4, 
			bgcolor: theme.palette.primary.light, 
			boxShadow: '0px 4px 5px rgba(72, 98, 132, 0.3)'}}>
			<Grid container
				justifyContent="space-between"
				alignContent="right">
			<NavButton addr='/' label='MusicNU' weight='bold'></NavButton>
			<Grid item xs="auto" md="auto" container alignContent="center">
					<NavBarLinks links={links}/>
			</Grid>
			</Grid>
		</Box>
	);
}

function NavBarLinks({links}) {
	return (
		<Stack direction={{ xs: "column", md: "row" }} spacing={3}>
			{links.map(link => {
				return (
					<Grid item key={link.label} xs="auto">
						<NavButton addr={link.addr} label={link.label}></NavButton>
					</Grid>
				);
			})}
		</Stack>
	);
}

export default NavBar;