import { Dimensions, StyleSheet } from "react-native";
import { CIANO, PRETO, CINZA, CNZACL, BRANCO } from "./../../constants/colors";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: 'center',
  },

  userSession: {
    maxWidth: 400,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  userImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },

  userIfo: {
    marginHorizontal: 10,
  },

  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },

  userLocation: {
    fontSize: 14,
    color: CINZA,
  },

  productSession: {
    alignSelf: 'center',
    maxWidth: 300,
    backgroundColor: BRANCO,
    borderRadius: 15,
    //alignItems: 'center',
  },

  prodImage: {
    //width: 300,
    //height: 300,
    height: 230,
    width: 300,

    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  prodInfo: {
    marginHorizontal: 10,
    //alignItems: 'flex-start',
    flexWrap: "wrap",
    paddingBottom: 10,
  },

  topDesc: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  prodTitle: {
    fontWeight: "bold",
    fontSize: 20,
    maxWidth: 170,
    flexWrap: "wrap",
  },

  prodPrice: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: "bold",
  },

  prodDesc: {
    fontSize: 16,
    color: CINZA,
    flexWrap: "wrap",
    maxWidth: 280,
    textAlign: "justify",
  },

  buttoncontactUser: {
    alignSelf: "center",
    margin: 20,
    backgroundColor: CIANO,
    borderRadius: 15,
  },

  buttonLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: BRANCO,
    marginHorizontal: 50,
    marginVertical: 15,
  },

  label: {
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: "bold",
  },

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },

  modal: {
    position: "absolute",
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: 490,
    alignSelf: "center",
    backgroundColor: BRANCO,
    borderRadius: 20,
    alignItems: "center",
  },

  modalUserInfo: {
    marginVertical: 40,
    alignItems: "center",
  },

  modalUserImage: {
    height: 152,
    width: 152,
    borderRadius: 500
  },

  modalUserDesc: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10
  },

  modalUserName: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  modalUserSchool: {
    fontSize: 18,
    fontWeight: 'bold',
    color: CINZA
  },

  modalUserStatus: {
    fontSize: 16,
    color: CINZA
  },

  modalContactView: {
    marginVertical: 20,
    backgroundColor: CIANO,
    paddingVertical: 20,
    width: 250,
    borderRadius: 15,
    alignItems: 'center'
  },

  contactInfo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: BRANCO
  },

  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});
