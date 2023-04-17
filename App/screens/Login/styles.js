import { StyleSheet, ViewStyle, Platform } from "react-native";
import Constants from "expo-constants";

const CIANO = "#00B0AE";
const CONTENT_BACKGROUND = "#FFFFFF";

export const styles = StyleSheet.create({   
    topSafeArea: {
        backgroundColor: CIANO,
    },
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor:
            Platform.OS === "ios" ? CONTENT_BACKGROUND : CIANO,
    },
    header: {
        height: 50,
        backgroundColor: CIANO,
        paddingHorizontal: 20
    },
    nav:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    logo: {
        maxWidth: 100,
        maxHeight: 30,
    },
    back: {
        maxWidth: 40,
        maxHeight: 30,
    },
    headerText: {
        color: "#fff",
        fontSize: 20
    },
    content: {
        paddingTop: 110,
        paddingHorizontal: 30,
        backgroundColor: CONTENT_BACKGROUND
    },
    formGroup: {
        marginBottom: 10,
    },

    input: {
        height: 50,
        paddingHorizontal: 20,
        borderRadius: 20,
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
    }
});