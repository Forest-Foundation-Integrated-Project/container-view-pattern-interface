import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
    Linking,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

export default function MenuScreen(props) {
    const { navigation, state } = props;
    const { routes } = state;

    const BASE_PATH =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
    const proileImage = 'react_logo.png';

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/*Top Large Image */}
            <Image
                source={{ uri: "https://as1.ftcdn.net/v2/jpg/01/65/63/94/1000_F_165639425_kRh61s497pV7IOPAjwjme1btB8ICkV0L.jpg" }}
                style={styles.sideMenuProfileIcon}
            />
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Visit Us"
                    onPress={() => Linking.openURL('https://aboutreact.com/')}
                />
                <View style={styles.customItem}>
                    <Text
                        onPress={() => {
                            Linking.openURL('https://aboutreact.com/');
                        }}>
                        Rate Us
                    </Text>
                    <Image
                        source={{ uri: BASE_PATH + 'star_filled.png' }}
                        style={styles.iconStyle}
                    />
                </View>
            </DrawerContentScrollView>
            <Text
                style={{
                    fontSize: 16,
                    textAlign: 'center',
                    color: 'grey',
                }}>
                www.aboutreact.com
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
