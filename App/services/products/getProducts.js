import { BASE_URL } from "@env";
import { toSnakeCase } from "../../utils/string";
import { httpGet } from "./../httpGet";

export default async function getProducts({params, token}) {
  const response = await httpGet(BASE_URL, `products?${params}`, token);

  //console.log("aaaaaasssss", JSON.stringify(response));

  return response;
}
