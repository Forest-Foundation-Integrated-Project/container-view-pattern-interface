import { MS_USERS_BASE_URL } from "@env";
import { TEST_USERS_BASE_URL } from "@env";
import { httpGet } from "../httpGet";

export async function fetchUser(navigation) {
  let url = MS_USERS_BASE_URL;
  let userData;

  const response = await httpGet(`${url}/${userId}`);

  console.log(response);

  if (response.status == 200) {
    userData = response.data;
  } else {
    alert("Erro: " + response.message);
    token = null;
  }

  return userData;
}
