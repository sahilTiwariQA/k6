import http from 'k6/http';

export default function(){
    const res = http.get('https://test.k6.io');
    console.log("Response code is: "+res.status);
    console.log("Response body is: "+res.body);

}