import axios from 'axios'
import NProgress from 'nprogress';

NProgress.configure({
    showSpinner: false,
    minimum: 0.08,
    trickle: true,
    trickleSpeed: 100,
    speed: 400,
    easing: 'ease',
    positionUsing: 'translate3d'
});


const instance = axios.create({
    baseURL: 'http://localhost:8081/',
    //   timeout: 1000,
    //   headers: { 'X-Custom-Header': 'foobar' },
});



// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        NProgress.start();
        // Do something before the request is sent
        return config;
    },
    function (error) {
        // Do something with the request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        NProgress.done();
        // console.log("Check >>> ", response)
        // Any status code that lies within the range of 2xx causes this function to trigger
        // Do something with response data
        return response && response.data ? response.data : response;
    },
    function (error) {
        NProgress.done();

        // Any status codes that fall outside the range of 2xx cause this function to trigger
        // Do something with response error

        return error && error.response && error.response.data ? error.response.data : Promise.reject(error);
    }
);

export default instance;