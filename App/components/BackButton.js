import { Image, View } from 'react-native';

export default function BackButtom() {
    return (
        <View>
            <Image
                style={{ maxWidth: 30, maxHeight: 30 }}
                source={require('../assets/images/voltar.png')}
            />
        </View>

    );
}
