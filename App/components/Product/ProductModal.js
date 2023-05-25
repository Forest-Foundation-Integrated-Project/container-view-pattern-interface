import { useContext } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { ModalContext } from "../../store/modal-context";
import { styles } from "./../../screens/Home/styles";

export function ProductModal() {
    const { isOpen, closeModal } = useContext(ModalContext);
    console.log(isOpen)
    return (
        <View style={styles.viewModal}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text>This is a modal</Text>
                    <TouchableOpacity onPress={closeModal}>
                        <Text>Close Modal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ View >
    );
}
