import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { CIANO } from "./constants/colors";

export const styles = StyleSheet.create({
  headerNavigation: {
    drawerPosition: "right",
    backgroundColor: CIANO,
    flexDirection: "row",
    drawerStyle: {
      width: "75%",
      marginTop: "20%",
    },
    overlayColor: "rgba(0, 0, 0, 0)",
    swipeEdgeWidth: 0,
    headerStyle: {
      backgroundColor: CIANO,
    },
    headerTintColor: "#fff",
    logoTitle: {
      maxWidth: 110,
      maxHeight: 30,
    },
    headerRightContainer: {
      alignItems: "center",
      paddingRight: 10,
      width: "50%",
      flex: 2,
      justifyContent: "flex-end",
    },
  },
});
