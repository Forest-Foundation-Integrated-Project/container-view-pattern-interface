import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import { CIANO } from "../../constants/colors";

const CONTENT_BACKGROUND = "#FFFFFF";

export default StyleSheet.create({
  StackScreen: {
    display: "hidden",
  },

  topSafeArea: {},
  container: {
    backgroundColor:
      Platform.OS === "ios" ? CONTENT_BACKGROUND : CONTENT_BACKGROUND,
  },

  container: {
    flex: 1,
    backgroundColor: CIANO,
    paddingHorizontal: 30,
    paddingTop: 150,
  },

  content: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

  },

  formGroup: {
  },

  input: {
    overflow: "hidden",
    marginTop: 15,
    backgroundColor: "white",
    height: 50,

    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
  },

  button: {
    borderRadius: 20,
    backgroundColor: CIANO,
    marginTop: 20,
    height: 75,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: CONTENT_BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 10,
  },

});
