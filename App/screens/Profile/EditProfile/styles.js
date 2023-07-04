import { StyleSheet } from "react-native";
import { CIANO, CONTENT_BACKGROUND } from "./../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  profileAvatar: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  imageContainer: {
    marginTop: 10,
    paddingRight: 25,
    paddingLeft: 5,
  },
  image: {
    resizeMode: "center",
    width: 120,
    height: 120,
    borderRadius: 120,
    alignSelf: "center",
  },
  imageEdit: {
    position: "absolute",
    top: 0,
    right: 1,
  },
  formGroup: {
    marginBottom: 10,
    flex: 1,
  },
  dualFormGroup: {
    flex: 1,
    flexDirection: "row",
  },
  topSafeArea: {},
  content: {
    paddingHorizontal: 30,
    backgroundColor: CONTENT_BACKGROUND,
    paddingTop: 30,
  },
  input: {
    minWidth: 165,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
  },
  inputText: {
    color: "#000",
    paddingVertical: 12,
  },
  label: {
    color: "#808080",
    paddingLeft: 15,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: "#ff7675",
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    padding: 5,
    height: 50,
    width: "60%",
    backgroundColor: CIANO,
    borderRadius: 15,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 10,
  },
  inputPicker: {
    minWidth: 165,
    height: 50,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  picker: {
    width: 30,
    height: 30,
    paddingRight: 10,
  },
  pickerText: {
    color: "cccccc",
    fontSize: 14,
  },
  pickerSelect: {
    color: "black",
    fontSize: 14,
  },
});
