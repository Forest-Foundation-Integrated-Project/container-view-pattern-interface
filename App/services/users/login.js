import { BASE_URL } from "@env";
import { TEST_USERS_BASE_URL } from "@env";
import { httpPost } from "../httpPost";

export async function login(email, password, navigation) {
  let url = `${BASE_URL}/auth/sign-in`;
  let data;

  const response = await httpPost(url, {
    email: email,
    password: password,
  });

  if (response.status == 200) {
    data = response.data;
  } else {
    alert("Erro: " + response.message);
    data = null;
  }

  return data;
}
