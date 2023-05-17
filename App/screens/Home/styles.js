import { Dimensions, StyleSheet } from 'react-native';

const CIANO = "#00B0AE";
const CONTENT_BACKGROUND = "#FFFFFF";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
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
        margin: 30
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    list: {
        paddingHorizontal: 8
    },
    item: {
        width: screenWidth * 0.5,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderRadius: 20
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00c',
    },
    viewModal: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    modalContainer: {
        // flex: 0.5,
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
        // backgroundColor: 'rgba(255, 0, 255, 0.2)',
        // paddingTop: 20,

    },
    modalContent: {
        // backgroundColor: 'red',
        // padding: 20,
        // borderRadius: 10,
    }
});
