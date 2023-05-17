import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet } from 'react-native';

const CIANO = '#00B0AE'

export const styles = StyleSheet.create({
    headerNavigation: {
        flexDirection: "row",
        headerStyle: {
            backgroundColor: CIANO
        },
        drawerPosition: "right",
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        logoTitle: {
            maxWidth: 110,
            maxHeight: 30
        },
        headerRightContainer: {
            alignItems: 'center',
            paddingRight: 10,
            width: "50%",
            flex: 2
        },
        searchIcon: {
            flexDirection: "row",
            flex: 2,
            padding: 10
        },
        menuIcon: {
            flex: 2,
            padding: 10
        },
        drawerPosition: "left"
    },
});