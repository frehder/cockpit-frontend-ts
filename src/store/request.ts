import axios from 'axios';

const request = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/api/`,
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_BEARER_TOKEN}`,
    },
});

export default request;
