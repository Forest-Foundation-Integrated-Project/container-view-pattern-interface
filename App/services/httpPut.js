import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function httpPut(url, data, token) {
  try {
    if (typeof token == "undefined") {
      token = await AsyncStorage.getItem("token");
    }

    const response = await axios.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("RESPONS ESTATUS ", response.status);

    if ([200, 201].includes(response.status)) {
      return response;
    } else {
      throw new Error(response.message);
    }
  } catch (error) {
    throw new Error(error);
  }
}
