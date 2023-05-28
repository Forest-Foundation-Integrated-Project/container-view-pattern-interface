import { Ionicons } from "@expo/vector-icons";
import { Image, View } from "react-native";
import { StyleSheet } from "react-native";

export function EditButtonFilled({ tintColor }) {
  return (
    <View style={styles.view}>
      <Image
        style={(styles.image, { tintColor: tintColor })}
        source={require("../assets/images/edit-icon-filled.svg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    marginRight: 10,
  },
  image: {
    maxWidth: 50,
    maxHeight: 50,
  },
});
