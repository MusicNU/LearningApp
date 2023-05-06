import React from 'react';
import { Box, Container } from '@mui/material/';
import TextBox from '../Components/TextCard';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            {/* search bar */}
            <div className='ui form' style={{textAlign:'center',marginTop:'130px'}}>
                <form onSubmit={this.handleSubmit} className='searchBar'>
                    <div className='searchBar'>
                        {/* <label htmlFor="video-search">Video Search</label> */}
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search for a song..." class='input'/>
                    </div>
                </form>
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'10px'}}>
                <TextBox name={'powered by'} fontSize='20px' elevation='0'></TextBox>
                <img style={{width:'60px', height:'30px', marginLeft:'5px'}} src='https://www.thatitguy.net/wp-content/uploads/2018/08/1280px-Logo_of_YouTube_2015-2017.svg.png' alt="youtube logo"></img>
            </Box>
            </>
        )
    }
}
export default Searchbar;