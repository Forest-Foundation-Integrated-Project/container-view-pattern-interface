import axios from "axios";

export async function httpPut(url, data) {
  try {
    jsonData = JSON.stringify(data);
    const response = await axios.put(url, data);
    return response;
  } catch (error) {
    return error;
  }
}
