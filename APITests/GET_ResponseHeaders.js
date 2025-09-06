import http from 'k6/http';
import { check } from 'k6';

export default function()
{
    let res = http.get("http://localhost:8000/public/crocodiles");
    const crocodile = res.json();
    console.log(crocodile[0]); // this returns the first crocodile details in the console
    console.log(crocodile[0].id); // this returns the first crocodile's id in the console

    const crocodileId = crocodile[0].id;
    const crocodileName = crocodile[0].name;

    // res = http.get('http://localhost:8000/public/crocodiles/'+ crocodileId +'/'); //this works as a string with variable
    res = http.get(`http://localhost:8000/public/crocodiles/${crocodileId}/`); //this works as a string with variable with back apostrophe (doesn't work with single quote)

    // console.log(res.json().name); // res.json() coverts JSON into javascript object, with which we can access keys from JSON and interact eg. in this case name returns Sobek

    console.log(res.headers); //** This returns response headers */
    console.log(res.headers.Allow); //** This returns particular response header */
    console.log(res.headers['Content-Type']); //** This returns particular response header */

    check(res, {
        'status is 200':(r) => r.status === 200, //asserts status code 200
        // 'body contains name is Sobek':(r) => r.body.includes('Sobek') //asserts if body includes some string
        'Crocodile name verified ': (r) => r.json().name === crocodileName //asserts if specifically name value is some string

    })
}

// This Run command will show the request and response: k6 run --http-debug="full" APITests/GET_Responseheaders.js 