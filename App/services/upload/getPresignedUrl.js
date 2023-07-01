import { BASE_URL } from "@env";
import { toSnakeCase } from "../../utils/string";
import { httpGet } from "./../httpGet";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function getPresignedUrl(params) {
  const response = await httpGet(BASE_URL + "/products/upload", params, null);

  return response;
}
