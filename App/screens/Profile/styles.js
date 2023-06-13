import { StyleSheet } from "react-native";
import { CIANO } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  profileAvatar: {
    resizeMode: "center",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  imageContainer: {
    marginTop: 20,
    padding: 15,
  },
  image: {
    resizeMode: "center",
    width: 150,
    height: 150,
    borderRadius: 150,
    alignSelf: "center",
  },
  userName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000000",
  },
  userUniversity: {
    fontSize: 18,
    color: "#383838",
    fontWeight: "700",
  },
  userRole: {
    fontSize: 15,
    fontWeight: "300",
  },
  bio: {
    lineHeight: 17,
    textAlign: "justify",
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  bioDescription: {
    fontSize: 16,
    lineHeight: 17,
    color: "#252525",
    fontWeight: "400",
  },
  buttons: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
    marginLeft: 10,
  },
  button: {
    backgroundColor: CIANO,
    borderRadius: 18,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 14,
    paddingBottom: 14,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: 700,
    alignSelf: "center",
  },
  products: {},
  successMessage: {
    backgroundColor: "green",
    padding: 10,
    marginBottom: 10,
  },
  successText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
