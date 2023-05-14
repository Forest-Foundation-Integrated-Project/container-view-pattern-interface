import { StyleSheet } from 'react-native';
import Constants from "expo-constants";
const CIANO = "#00B0AE";
const CONTENT_BACKGROUND = "#FFFFFF";

export default StyleSheet.create({
    StackScreen: {
        display: 'hidden'
    },

    topSafeArea: {
    },
    container: {
        backgroundColor:
            Platform.OS === "ios" ? CONTENT_BACKGROUND : CONTENT_BACKGROUND,
    },

    container: {
        flex: 1,
        backgroundColor: CIANO,
        paddingHorizontal: 30,
    },

    content: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        height: 300,
        maxWidth: 300,
        alignSelf: "center",
        margin: 30,
        padding: 10
    },
    input: {
        overflow: 'hidden',
        marginTop: 15,
        backgroundColor: 'white',
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
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 75,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: CONTENT_BACKGROUND,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        paddingVertical: 10
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: 'white'
    },
    footerLink: {
        color: CONTENT_BACKGROUND,
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 16
    }
})