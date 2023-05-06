import axios from 'axios';

import { MS_USERS_BASE_URL } from '@env'
import { toSnakeCase } from '../../utils'

export async function createUser(userData) {
    userData = toSnakeCase(userData);
    userData.city = "Caraguatatuba"

    console.log('Making request with data:', userData);

    response = await axios.post(MS_USERS_BASE_URL, userData)
        .then(response => {
            console.log('Request successful. Response:', response.data);
            // handle response
        })
        .catch(error => {

            console.log('Request failed with error:', error.response);
            // handle error 
        });

    return response
}