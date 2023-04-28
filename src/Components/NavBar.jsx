import { Box, Button, Grid, Stack } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import theme from '../theme';


function NavBar({links}) {
	return (
		//purple rgba(65, 55, 138, 0.3)
		//blue rgba(72, 98, 132, 0.3)
		<Box sx={{ py: 1, px: 3, bgcolor: theme.palette.primary.light, boxShadow: '0px 4px 5px rgba(72, 98, 132, 0.3)'}}>
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
							sx={{color: theme.palette.primary.main}}
							size="large"
						>{link.label}</Button>
					</Grid>
				);
			})}
		</Stack>
	);
}

export default NavBar;