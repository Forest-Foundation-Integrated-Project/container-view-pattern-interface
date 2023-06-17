import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function httpPut(url, data, token) {
  if (typeof token == "undefined") {
    token = await AsyncStorage.getItem("token");
  }

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.put(url, data, { headers: headers });
    return response;
  } catch (error) {
    console.log("ERROR: " + JSON.stringify(error.response));
    return error;
  }
}
