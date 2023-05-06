import axios from 'axios';

import { REACT_APP_MS_USERS_BASE_URL } from '@env'


export async function createUser(userData) {
    console.log(REACT_APP_MS_USERS_BASE_URL)
    console.log('Making request with data:', userData);

    response = await axios.post(REACT_APP_MS_USERS_BASE_URL, userData)
        .then(response => {
            console.log('Request successful. Response:', response.data);
            // handle response
        })
        .catch(error => {
            console.log('Request failed with error:', error);
            // handle error
        });

    return response
}