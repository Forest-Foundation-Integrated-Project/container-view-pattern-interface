import axios from "axios";

export async function httpPost(url, data) {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
