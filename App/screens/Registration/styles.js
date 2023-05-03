import { StyleSheet, ViewStyle, Platform } from "react-native";
import Constants from "expo-constants";

const CIANO = "#00B0AE";
const CONTENT_BACKGROUND = "#FFFFFF";

export const styles = StyleSheet.create({
    topSafeArea: {
    },
    container: {
        flex: 1,
        backgroundColor:
            Platform.OS === "ios" ? CONTENT_BACKGROUND : CONTENT_BACKGROUND,
    },

    content: {
        paddingVertical: 70,
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
        minWidth: 165,
        height: 50,
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

    inputPicker: {
        minWidth: 165,
        height: 50,
        paddingVertical: -10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#e3e3e3",
        backgroundColor: "#fff",
    },

    pickerText:{
        color: "darkgrey",
        fontSize: 14,
    },

    pickerSelect:{
        color: "black",
        fontSize: 14,
    }
});