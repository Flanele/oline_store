import axios from 'axios';

const $host = axios.create({
    baseURL: process.env.REACT_API_APP_URL
});

const $authHost = axios.create({
    baseURL: process.env.REACT_API_APP_URL
});

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;

    return config;
};

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
};