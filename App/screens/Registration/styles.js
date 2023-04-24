import { StyleSheet, ViewStyle, Platform } from "react-native";
import Constants from "expo-constants";

const CIANO = "#00B0AE";
const CONTENT_BACKGROUND = "#FFFFFF";

export const styles = StyleSheet.create({
    topSafeArea: {
    },
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor:
            Platform.OS === "ios" ? CONTENT_BACKGROUND : CONTENT_BACKGROUND,
    },

    content: {
        paddingTop: 90,
        paddingHorizontal: 30,
        backgroundColor: CONTENT_BACKGROUND
    },
    formGroup: {
        marginBottom: 10,
    },

    dualFormGroup: {
        flex: 1,
        flexDirection: "row",
    },

    input: {
        height: 50,
        minWidth: 175,
        paddingHorizontal: 20,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#e3e3e3",
        backgroundColor: "#fff",
    },
    inputText: {
        color: "darkgrey",
        paddingVertical: 12,
    },
    errorContainer: {
        marginVertical: 5,
    },
    errorText: {
        color: "#ff7675",
    },
    button: {
        marginTop: 40,
        padding: 15,
        height: 75,
        backgroundColor: CIANO,
        borderRadius: 20,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        paddingVertical: 10
    },

    popUp:{
        backgroundColor: "white",
        borderRadius: 20,
        height: 300,
        width: 300,
        position: "absolute",
        top: 100,
        left: 50,
        right: 50,
    }
});