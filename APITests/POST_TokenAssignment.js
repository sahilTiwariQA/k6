import http from 'k6/http'
import { check } from 'k6';

export default function() {

   let res= http.post('http://localhost:8000/auth/token/login/', 
        JSON.stringify(
            {
                username: 'test_649',
                password: 'test'
            }
        ), 
        {headers: 
            {'Content-Type' : 'application/json'}
        }
    );


    const accessToken = res.JSON().access;
    console.log(accessToken);
}

//k6 run --http-debug="full" APITests/POST_TokenAssignment.js 