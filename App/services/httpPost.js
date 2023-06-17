import axios from "axios";

export async function httpPost(url, data) {
  try {
    jsonData = JSON.stringify(data);
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    console.log("ERRO: " + JSON.stringify(error));
    return error;
  }
}
