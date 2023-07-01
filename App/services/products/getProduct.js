import { BASE_URL } from "@env";
import { toSnakeCase } from "../../utils/string";
import { httpGet } from "./../httpGet";

export default async function getProduct(productId) {
  const response = await httpGet(BASE_URL + `/products`, {
    productId: productId,
  });

  return response;
}
