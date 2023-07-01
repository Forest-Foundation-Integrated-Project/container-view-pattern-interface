import { StyleSheet } from "react-native";
import { CIANO } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 20,
  },
  productContainer: {
    // marginHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: 150,
    height: 150,
    // marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  emptyImage: {
    width: 100,
    height: 100,
    backgroundColor: "lightgray",
  },
  uploadButton: {
    padding: 5,
    height: 30,
    width: "60%",
    backgroundColor: CIANO,
    borderRadius: 8,
    alignSelf: "center",
  },
  uploadButtonText: {
    color: "white",
  },
  titleView: {
    paddingVertical: 10,
  },
});
