import axios from 'axios';

export function saveUser(userData) {
    real_url = 'http://localhost:3000/dev/v1/users/user'
    url = 'https://jsonplaceholder.typicode.com/users'
    console.log('Making request with data:', userData);

    axios.post(url, userData)
        .then(response => {
            console.log('Request successful. Response:', response.data);
            // handle response
        })
        .catch(error => {
            console.log('Request failed with error:', error);
            // handle error
        });
}