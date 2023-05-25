import { Image, View } from 'react-native';

export function BackButtom() {
    return (
        <View style={{ marginLeft: 10 }}>
            <Image
                style={{ maxWidth: 30, maxHeight: 30 }}
                source={require('../assets/images/voltar.png')}
            />
        </View>

    );
}
