import { BASE_URL } from "@env";
import { TEST_USERS_BASE_URL } from "@env";
import { httpPost } from "../httpPost";

export async function login(email, password, navigation) {
  try {
    let url = `${BASE_URL}/auth/sign-in`;
    let token;
    let user_id;

    const response = await httpPost(url, {
      email: email,
      password: password,
    });

    if (response.status == 200) {
      token = response.data.token;
      user_id = response.data.userId;
    } else {
      throw new Error("Erro: " + response.message);
    }

    return { token, user_id };
  } catch (error) {
    throw new Error("Erro: ", JSON.stringify(error));
  }
}
