import { Image } from 'react-native';

export default function LogoTitle() {
    return (
        <Image
            style={{ maxWidth: 110, maxHeight: 30 }}
            source={require('../assets/images/logo.png')}
        />
    );
}