import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { CIANO, BRANCO } from "../../constants/colors";

export default StyleSheet.create({
  StackScreen: {
    display: "hidden",
  },

  topSafeArea: {},
  container: {
    backgroundColor:
      Platform.OS === "ios" ? BRANCO : BRANCO,
  },

  container: {
    flex: 1,
    backgroundColor: CIANO,
    paddingHorizontal: 30,
    paddingTop: 26,
  },

  content: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

  },

  informationalText: {
    justifyContent: "space-between",
    marginBottom: 40
  },

  headline:{
    fontSize: 30,
    fontWeight: "bold",
    color: BRANCO
  },

  subtext: {
    fontSize: 20,
  },

  formGroup: {
    paddingTop: 20,
    paddingBottom: 10,
  },

  input: {
    overflow: "hidden",
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
    borderColor: BRANCO,
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
