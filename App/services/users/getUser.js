import { MS_USERS_BASE_URL } from "@env";
import { toSnakeCase } from "../../utils/string";
import { httpGet } from "./../httpGet";

export default async function getUser(userId) {
  response = httpGet(MS_USERS_BASE_URL, userData);

  return response;
}
