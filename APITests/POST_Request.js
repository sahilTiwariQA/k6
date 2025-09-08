import http from 'k6/http'
import { check } from 'k6';

export default function() {

    //Request body
    const body = JSON.stringify({
    username: 'test649_'+Date.now(),
    password: 'test1'
});

//Request parameters
const params = {
    headers:{ 
        'Content-Type' : 'application/json'
    }
};

//actual POST request:
    http.post('http://localhost:8000/user/register/', body, params);
}

//k6 run --http-debug="full" APITests/POST_Request.js 