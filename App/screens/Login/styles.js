import { StyleSheet } from 'react-native';

const CIANO = "#00B0AE";
const CONTENT_BACKGROUND = "#FFFFFF";

export default StyleSheet.create({
    StackScreen: {
        display: 'hidden'
    },

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: CIANO,
        paddingHorizontal: 30,
        paddingVertical: 50
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 300,
        maxWidth: 300,
        alignSelf: "center",
        margin: 30
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
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
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