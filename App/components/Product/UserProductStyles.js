import { Dimensions, StyleSheet } from "react-native";
import { CIANO, PRETO, CINZA, CNZACL, BRANCO } from "../../constants/colors";

export const UserProductStyles = StyleSheet.create({
  topSafeArea: {},

  topSafeArea: {},
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  userSession: {
    maxWidth: "100%",
    marginVertical: 10,
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
    maxWidth: 350,
    maxHeight: 500,
    backgroundColor: BRANCO,
    borderRadius: 15,
  },
  contactUserSection: {
    alignItems: "center",
    justifyContent: "center",
  },
  productList: {
    width: "100%",
  },
  prodImage: {
    width: 400,
    height: 300,
    // height: 250,
    // width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  prodInfo: {
    marginHorizontal: 10,
    //alignItems: 'flex-start',
    flexWrap: "wrap",
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
    maxWidth: 290,
  },
  buttoncontactUser: {
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
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
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
  //prefix m is related to seller modal
  mcenteredView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  mmodalView: {
    height: "65%",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 400,
  },
  mbutton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 100,
    backgroundColor: CIANO,
    justifyContent: "center",
    alignItems: "center",
  },
  mbuttonText: {
    color: "white",
    fontSize: 20,
    paddingHorizontal: 20,
    textAlign: "center",
    fontWeight: 700,
  },
  mbuttonOpen: {
    backgroundColor: "#F194FF",
  },
  mbuttonClose: {
    backgroundColor: "#2196F3",
  },
  mtextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  mmodalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  muserSession: {
    flexDirection: "column",
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
    alignContent: "center",
  },
  muserImage: {
    height: 150,
    width: 150,
    borderRadius: 150,
    alignSelf: "center",
  },
  muserName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  muserLocation: {
    fontSize: 18,
    color: "grey",
    alignSelf: "center",
  },
  muserIfo: {},
});
