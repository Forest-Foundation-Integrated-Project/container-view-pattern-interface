import { BASE_URL } from "@env";
import { toSnakeCase } from "../../utils/string";
import { httpGet } from "./../httpGet";

export default async function getProducts({ params, token }) {
  try {
    const response = await httpGet(BASE_URL + "/products", params, token);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
