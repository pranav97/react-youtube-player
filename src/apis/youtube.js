import axios from 'axios';
const KEY = "AIzaSyCYFEX6ENA-YMkV45NLS90x55S2VN7eU64";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/videos",
    params: {
        part: "sippet",
        maxResults: 5,
        key: KEY
    }
});


