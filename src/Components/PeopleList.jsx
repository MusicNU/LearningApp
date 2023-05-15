import { Box, Container, Grid, Typography, Card, CardActions, CardContent, CardMedia } from '@mui/material/';

function PeopleList({people}) {

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', marginBottom: '60px', alignContent: 'space-evenly', rowGap: '40px'}}>
        {people.map(person => {
            return (
                <Card sx={{ width: '300px' }} className='card'>
                <CardContent>
                    <h3>{person.name}</h3>
                    <h4>{person.job}</h4>
                    <CardMedia className="img" component="img" height="280" src={person.img} />
                    <p>{person.bio}</p>
                </CardContent>
                </Card>
			);
		})}
        </Box>
    )
}

export default PeopleList;