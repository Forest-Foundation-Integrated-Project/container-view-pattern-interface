import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity, Modal, Text } from 'react-native';
import { styles } from './../generalStyles';
import { useContext } from 'react';
import { ModalContext } from '../store/modal-context';

export default function MenuScreen({ navigation }) {
    const { openModal } = useContext(ModalContext);

    const toggleModal = () => {
        openModal();
    };


    return (
        <View style={styles.headerRightContainer}>
            <TouchableOpacity style={styles.menuIcon} onPress={navigation.goBack()}>
                <Ionicons name="menu-outline" size={40} color="white" />
            </TouchableOpacity>
        </View>
    );
}