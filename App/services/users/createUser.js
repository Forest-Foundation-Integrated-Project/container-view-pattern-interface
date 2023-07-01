import { MS_USERS_BASE_URL } from "@env";
import { toSnakeCase } from "../../utils/string";
import { httpPost } from "./../httpPost";

export default async function createUser(userData) {
  try {
    userData = toSnakeCase(userData);
    userData.city = "Caraguatatuba";
    response = httpPost(MS_USERS_BASE_URL, userData);
    return response;
  } catch (error) {
    throw new Error("CreateUser::Error: ", error);
  }
}
