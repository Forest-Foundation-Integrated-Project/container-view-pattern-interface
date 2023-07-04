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
    paddingHorizontal: 0,
  },

  content: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    height: 80,
    width: 292,
    maxWidth: 350,
    alignSelf: "center",
    resizeMode: "stretch",
    marginTop: 92,
    marginBottom: 53,
    marginHorizontal: 68,
  },
  input: {
    overflow: "hidden",
    marginTop: 15,
    backgroundColor: "white",
    height: 120,
    width: 300,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
  },

  messageBox: {
    display: "flex",
    width: 396,
    // height: 110,
    alignItems: "center",
    flexDirection: "column",
  },

  message: {
    color: "#FFF",
    textAlign: "justify",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: 700,
  },

  emailBox: {
    backgroundColor: "#FFF",
    paddingVertical: 22,
    paddingHorizontal: 15,
    flexDirection: "column",
    justifyContent: "center",
    
    marginTop: 50,
    marginHorizontal: 16,
    borderRadius: 15,
  },

  emailLabel: {
    fontSize: 16,
    fontWeight: 600,
  },

  emailUser: {
    marginTop: 5,
    fontWeight: 900,
    fontSize: 18,
  },

  authenticationMessageBox: {
    width: 396,
    height: 73,
    marginTop: 65,
    paddingHorizontal: 22,
  },

  authenticationMessage: {
    color: "#FFF",
    textAlign: "justify",
    fontWeight: 600,
    fontSize: 20,

  },

  button: {
    marginTop: 50,
    marginHorizontal: 95,
    backgroundColor: CIANO,

    width: 214,
    height: 54,
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 6,
    borderStyle: "solid",
    borderColor: "#FFF",
    borderRadius: 20,
},

buttonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
},

shadow: {
  ...Platform.select({
    ios: {
      shadowColor: "black",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 15,
    },
    android: {
      elevation: 4,
    },
  }),
},
  
});
