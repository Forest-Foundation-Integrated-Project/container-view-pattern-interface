import axios from 'axios';

export async function httpPost(url, data) {
    try {
        console.log(` url: ${url}`);
        console.log(` data: ${JSON.stringify(data)}`);
        jsonData = JSON.stringify(data)
        const response = await axios.post(url, data);
        return response;
    } catch (error) {
        return error;
    }
}
