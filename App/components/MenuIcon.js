import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './../generalStyles';

export function MenuIcon({ onPress }) {
  return (
    <View>
      <TouchableOpacity style={styles.menuIcon} onPress={onPress}>
        <Ionicons name="menu-outline" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}
