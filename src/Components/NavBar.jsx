import { Box, Button, Grid, Stack } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import theme from '../theme';


function NavBar({links}) {
	return (
		<Box sx={{ py: 1, px: 3, bgcolor: theme.palette.primary.main, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)'}}>
			<Grid
				container
				justifyContent="space-between"
				alignContent="center"
			>
				<Grid item xs="auto">
				</Grid>
				<Grid item xs={12} md="auto" container alignContent="center">
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
						<Button
							href={link.addr}
							variant="text"
							sx={{color: theme.palette.primary.light}}
							size="large"
						>{link.label}</Button>
					</Grid>
				);
			})}
		</Stack>
	);
}

export default NavBar;