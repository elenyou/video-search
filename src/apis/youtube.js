import axios from "axios";

const KEY = 'AIzaSyCUIaStmvEKX2CPD-G4gKBRDHZzm7Ou9ok';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
});

