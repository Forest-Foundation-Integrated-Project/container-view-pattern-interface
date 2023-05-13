import { MS_USERS_BASE_URL } from '@env'
import { toSnakeCase } from '../../utils/string'
import { httpPost } from './../httpPost'

export default async function createUser(userData) {
    userData = toSnakeCase(userData);
    userData.city = "Caraguatatuba"
    response = httpPost(MS_USERS_BASE_URL, userData);

    return response
}