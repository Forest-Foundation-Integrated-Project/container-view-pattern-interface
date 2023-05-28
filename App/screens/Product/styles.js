import { Dimensions, StyleSheet } from "react-native";
import { CIANO, PRETO, CINZA, CNZACL, BRANCO } from "./../../constants/colors";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  topSafeArea: {},
  container: {
    flex: 1,
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
});
