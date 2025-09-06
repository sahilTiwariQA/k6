import http from 'k6/http';
import { check } from 'k6';

export default function()
{
    let res = http.get("http://localhost:8000/public/crocodiles")
    // console.log(res);
    res = http.get("http://localhost:8000/public/crocodiles/7/")

    console.log(res.json().name); // res.json() coverts JSON into javascript object, with which we can access keys from JSON and interact eg. in this case name returns Sobek

    check(res, {
        'status is 200':(r) => r.status === 200, //asserts status code 200
        // 'body contains name is Sobek':(r) => r.body.includes('Sobek') //asserts if body includes some string
        'Crocodile name is Sobek': (r) => r.json().name === 'Sobek' //asserts if specifically name value is some string

    })
}

// This Run command will show the request and response: k6 run --http-debug="full" APITests/GETRequest.js 