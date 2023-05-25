import { Image, StyleSheet } from 'react-native';

export function LogoTitle() {
    return (
        <Image
            style={styles.logoTitle}
            source={require('../assets/images/logo.png')}
        />
    );
}

const styles = StyleSheet.create({
    logoTitle: {
        maxWidth: 110,
        maxHeight: 30,
        flex: 2
    }
});