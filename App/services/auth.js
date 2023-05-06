import axios from 'axios';

import { API_KEY } from '@env'
import { MS_USERS_BASE_URL } from '@env'

export async function authenticate(mode, email, password) {
    const url = `${MS_USERS_BASE_URL}?key=${API_KEY}`;

    axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
    });
}

