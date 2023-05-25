import { Dimensions, StyleSheet } from "react-native";

const CONTENT_BACKGROUND = "#FFFFFF";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  topSafeArea: {},
  container: {
    backgroundColor:
      Platform.OS === "ios" ? CONTENT_BACKGROUND : CONTENT_BACKGROUND,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 300,
    maxWidth: 300,
    alignSelf: "center",
    margin: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  bannerArea: {
    alignItems: "center",
    marginVertical: 20,
  },

  banner: {
    maxWidth: 355,
    borderRadius: 15,
  },

  bannerImage: {
    height: 183,
    width: 355,
  },

  orderOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
    marginBottom: 20,
  },

  toggleOption: {
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: "center",
    width: 100,
    height: 30,
  },

  toggleOptionActive: {
    backgroundColor: CIANO,
  },

  orderOption: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },

  orderOptionActive: {
    color: "white",
  },

  list: {
    paddingHorizontal: 8,
  },
  item: {
    width: screenWidth * 0.5,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderRadius: 15,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00c",
  },
  viewModal: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
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
  },
});
