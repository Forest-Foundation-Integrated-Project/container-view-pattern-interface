import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text, Button, Image } from "react-native";
import { styles } from "./styles";
import { useEffect } from "react";
import { EditButtom } from "../../components/EditButton";
import { BackButtom } from "../../components/BackButton";

export default function ProfileScreen({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={goHome}>
          <BackButtom />
        </TouchableOpacity>
      ),
      headerRight: EditButtom,
    });
  }, [navigation]);

  const user = {
    name: "Lais Gonçalves",
    university: "Anhanguera - Caraguatatuba",
    role: "Vendedor",
    description:
      "Lorem impsu fdsad lorem impsum core. Corem ipsum dsad lorem impsum core. Corem ipsum fdsad lorem impsum core. Corem ipsum ",
  };

  function goHome() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileAvatar}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8La2nwie8i1L3Asva1zyiKRaiWkVzujCP9ixCPH7OzYsLOPwBGfJ8VNzV67jehFLz2s&usqp=CAU",
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userUniversity}>{user.university}</Text>
        <Text style={styles.userRole}>{user.role}</Text>
      </View>
      <View style={styles.bio}>
        <Text style={styles.bioDescription}>{user.description}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adcionar Produto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>EditarProdutos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.products}></View>
    </View>
  );
}
