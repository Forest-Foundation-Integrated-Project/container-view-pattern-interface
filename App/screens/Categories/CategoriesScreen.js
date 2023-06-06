import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text, Button } from "react-native";
import { styles } from "./../../generalStyles";

export default function CategoriesScreen({ navigation }) {
  return (
    <View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </View>
  );
}
