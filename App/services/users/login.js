import axios from 'axios';

import { MS_USERS_BASE_URL } from '@env'
import { TEST_USERS_BASE_URL } from '@env'
import { httpPost } from '../httpPost'

export async function login(email, password, navigation) {
    let url = MS_USERS_BASE_URL;
    if (__DEV__) {
        url = TEST_USERS_BASE_URL;
    }

    const response = await httpPost(
        `${url}login`,
        { email: email, password: password }
    );

    if (response.status == 200) {
        navigation.navigate('Home')
    } else {
        alert("Erro: " + response.message);
    }
}

