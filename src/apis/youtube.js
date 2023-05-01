import axios from 'axios';
const KEY = 'AIzaSyACPQ882wC0h4rolYzS0X1sm6NzJnaVWAE'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})