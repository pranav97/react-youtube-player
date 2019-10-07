import axios from 'axios';
const KEY = "AIzaSyBrOMzk5VbjjzLU6UV5HyyRLOm7TiOZIIQ";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});


