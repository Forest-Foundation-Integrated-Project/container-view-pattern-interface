import axios from 'axios';

import { MS_USERS_BASE_URL } from '@env'
import authenticate from '../auth'

export async function login(email, password) {
    await authenticate('login', email, password);
}

