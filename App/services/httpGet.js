import axios from "axios";

export async function httpGet(url, data) {
  try {
    jsonData = JSON.stringify(data);
    const response = await axios.get(url, data);
    return response;
  } catch (error) {
    return error;
  }
}
