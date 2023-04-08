import { Box, Button, Grid, Stack } from '@mui/material';


function NavBar({links}) {
	return (
		<Box sx={{ py: 1, px: 3, bgcolor: "primary.main"}}>
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
							sx={{color: "common.white"}}
							size="large"
						>{link.label}</Button>
					</Grid>
				);
			})}
		</Stack>
	);
}

export default NavBar;