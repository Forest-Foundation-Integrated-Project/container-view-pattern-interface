import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  imageContainer: {
    aspectRatio: 4 / 3, // altura é 3/4 da largura
    borderWidth: 1,
    borderColor: "#ddd",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
  },
  image: {
    resizeMode: 'contain',
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textContainer: {
    width: "100%",
    alignItems: "flex-start",
    marginTop: 8,
    paddingHorizontal: 10,
    flex: 1,
  },
  title: {
    flex: 1,
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
    color: "#666",
    paddingBottom: 10,
    maxWidth: 95
  },

  price: {
    position: "absolute",
    right: 10,
    bottom: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
  item: {
    flex: 0.5,
    width: 30,
    backgroundColor: "red",
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
  list: {
    flex: 0.5,
    backgroundColor: "red",
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
