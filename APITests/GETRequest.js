import http from 'k6/http';

export default function()
{
    const res = http.get("http://localhost:8000/public/crocodiles")
    // console.log(res);
    http.get("http://localhost:8000/public/crocodiles/7/")
}

// This Run command will show the request and response: k6 run --http-debug="full" APITests/GETRequest.js 