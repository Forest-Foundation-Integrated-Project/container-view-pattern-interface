import { BASE_URL } from "@env";
import { toSnakeCase } from "../../utils/string";
import { httpPut } from "./../httpPut";

export default async function updateProduct(productData) {
  try {
    response = httpPut(`${BASE_URL}/products`, productData);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
