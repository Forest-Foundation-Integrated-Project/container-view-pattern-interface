import React, {useState} from "react";
import {
    SafeAreaView,
    View,
    Modal,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput,
    Image,
    StyleSheet
} from "react-native";
import { styles } from "./styles";

export const GenderPopUP = () => {
    const [visible, setVisible] = useState(false)
    const options = [
        {
            title: 'Masculino',
            action: alert('Masculino')
        },
        {
            title: 'Feminino',
            action: alert('feminino')
        },
        {
            title: 'Outro'
            //action: ''
        }
    ]
    return (
        <>
            <TouchableOpacity style={styles.input} onPress={() => setVisible(true)}/>
            <Modal transparent visible={visible}>
                <SafeAreaView style={styles.popUp} onTouchStart={() => setVisible(false)}>
                    <View>
                        {options.map((op, i) => (
                            <TouchableOpacity key={i} onPress={() => op.action}>
                                <Text>({op.title})</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </SafeAreaView>
            </Modal>
        </>
    )
}
export default GenderPopUP;