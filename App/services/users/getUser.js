import { MS_USERS_BASE_URL } from "@env";
import { toSnakeCase } from "../../utils/string";
import { httpGet } from "./../httpGet";

export default async function getUser(userId, token) {
  response = await httpGet(MS_USERS_BASE_URL, userId, token);


  if (response.data.role !== "undefined") {
    response.data.role = response.data.role == "default" ? "Vendedor" : "Admin";
  }

  return response;
}
