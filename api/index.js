import axios from 'axios';

// HTTP Request & Response Default Setup
const config = {
  baseURL: 'https://yts.am/api/v2/list_movies.json',
  timeout: 5000,
};

// Create of instance funcion
const createInstance = config => axios.create({ ...config });

// Call to instance funcion in variable
const movies = createInstance(config);

// Add a request interceptor
movies.interceptors.request.use(
  // Do something before request is sent
  config => {
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
movies.interceptors.response.use(
  // Do something before response is sent
  response => {
    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  },
);

// API Function setup
const fetchMovies = query => movies.get(query);
// Export API Function
export { fetchMovies };
