import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './../generalStyles';

export function SearchIcon() {
    return (
        <View style={styles.headerRightContainer}>
            <TouchableOpacity style={styles.searchIcon}>
                <Ionicons name="search" size={34} color="white" />
            </TouchableOpacity>
        </View>
    );
}