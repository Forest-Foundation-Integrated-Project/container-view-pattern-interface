import { StyleSheet, ViewStyle, Platform } from "react-native";
import Constants from "expo-constants";

const HEADER_BACKGROUND = "#00ced1";
const CONTENT_BACKGROUND = "#f9f9f9";

export const styles = StyleSheet.create({
    topSafeArea: {
        backgroundColor: HEADER_BACKGROUND,
    },
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor:
            Platform.OS === "ios" ? CONTENT_BACKGROUND : HEADER_BACKGROUND,
        marginTop: 30
    },
    header: {
        height: 40,
        alignItems: "center",
        backgroundColor: HEADER_BACKGROUND,
    },
    headerText: {
        color: "#fff",
        fontSize: 20
    },
    content: {
        paddingTop: 20,
        backgroundColor: CONTENT_BACKGROUND
    },
    formGroup: {
        marginBottom: 10,
    },
    label: {
        color: "#7d7e79",
        fontSize: 16,
        lineHeight: 30,
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#e3e3e3",
        backgroundColor: "#fff",
    },
    errorContainer: {
        marginVertical: 5,
    },
    errorText: {
        color: "#ff7675",
    },
    button: {
        marginTop: 20,
        backgroundColor: "#06768d",
        padding: 15,
        borderRadius: 2,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    }
});
