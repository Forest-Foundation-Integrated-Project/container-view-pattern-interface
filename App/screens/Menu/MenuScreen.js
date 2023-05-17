import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './../../generalStyles';

export default function MenuScreen({ navigation }) {
    console.log(navigation)
    return (
        <View style={styles.viewModal}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text>This is a modal</Text>
                    <TouchableOpacity onPress={navigation.goBack()}>
                        <Text>Close Modal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ View >
    );
};