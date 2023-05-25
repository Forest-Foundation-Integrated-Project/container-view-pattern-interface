import { MS_USERS_BASE_URL } from '@env'
import { TEST_USERS_BASE_URL } from '@env'
import { httpPost } from '../httpPost'

export async function login(email, password, navigation) {
    let url = MS_USERS_BASE_URL;
    let token;

    if (__DEV__) {
        url = TEST_USERS_BASE_URL;
    }

    const response = await httpPost(
        `${url}login`,
        { email: email, password: password }
    );

    if (response.status == 200) {
        token = response.data.token;
    } else {
        alert("Erro: " + response.message);
        token = null
        console.log(response.message)
    }

    return token;
}

