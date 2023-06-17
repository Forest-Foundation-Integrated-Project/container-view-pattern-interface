import { BASE_URL } from "@env";
import { TEST_USERS_BASE_URL } from "@env";
import { httpPost } from "../httpPost";

export async function login(email, password, navigation) {
  let url = `${BASE_URL}/auth/sign-in`;
  let token;

  const response = await httpPost(url, {
    email: email,
    password: password,
  });

  if (response.status == 200) {
    token = response.data.token;
    user_id = response.data.userId;
  } else {
    alert("Erro: " + response.message);
    token = null;
    user_id = null;
  }

  return { token, user_id };
}
