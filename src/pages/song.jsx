import { Box, Container, Grid, Typography, TextField} from '@mui/material/';
import NoteBox from '../Components/NoteBox';
import Searchbar from '../Components/SearchBar';
import React from 'react';
import youtube from '../apis/youtube';

class Song extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
  
        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }
  
      render() {
    return (
      <>
        <Searchbar handleFormSubmit={this.handleSubmit}/>
      </>
            
    );
  }
}

export default Song;
  