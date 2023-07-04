import { MS_USERS_BASE_URL } from "@env";
import { httpPut } from "../httpPut";

export default async function sendToken(email, token, authToken) {
  try {
    let payload = {
      email: email,
      operationType: "confirmEmail",
      token: token,
    };

    response = await httpPut(
      `${MS_USERS_BASE_URL}/confirm-token`,
      payload,
      authToken
    );

    if (response.data.validInput) {
      return response.data.validInput;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error("SendToken::Error: ", error);
  }
}
