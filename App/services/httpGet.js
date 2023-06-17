import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { useSelector } from "react-redux";

export async function httpGet(url, data, token) {
  // Create an instance of axios
  const instance = axios.create();

  if (typeof token == "undefined") {
    token = await AsyncStorage.getItem("token");
    console.log("TOKEN: " + token);
  }

  var params;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    if (typeof data === "string") {
      url = `${url}/${data}`;
    } else {
      params = data;
    }

    return await instance.get(url, { params: params, headers: headers });
  } catch (error) {
    console.log("AXIOS GET ERROR: " + error);
    return error;
  }
}
