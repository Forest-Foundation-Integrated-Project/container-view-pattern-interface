import { StyleSheet } from 'react-native';
import Constants from "expo-constants";
const CIANO = "#00B0AE";
const PRETO = '#000000'
const CINZA = '#383838'
const CNZACL = '#D9D9D9'
const BRANCO = "#FFFFFF"

export default StyleSheet.create({

    topSafeArea: {
    },
    container: {
        backgroundColor:
            Platform.OS === "ios" ? BRANCO : BRANCO,
    },

    container: {
        flex: 1,
        backgroundColor: CIANO,
        paddingHorizontal: 30,
        alignItems: "center",
        justifyContent: "center",
    },

    content: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    labelContainer: {
        marginTop: 80,
    },

    labelText: {
        fontSize: 30,
        color: BRANCO,
        fontWeight: 'bold',
        textAlign: 'justify',
    },

    textInform: {
        marginVertical: 20,
        fontSize: 20,
        color: BRANCO,
        textAlign: 'justify'
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
        //marginHorizontal: 30,
        marginTop: 20,
        height: 75,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: BRANCO,
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

    shadow: {
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.5,
            shadowRadius: 15,
          },
          android: {
            elevation: 6,
          },
        }),
      },
})