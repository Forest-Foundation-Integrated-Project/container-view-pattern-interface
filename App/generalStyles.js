import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet } from 'react-native';

const CIANO = '#00B0AE'

export const styles = StyleSheet.create({
    headerNavigation: {
        flexDirection: "row",
        drawerPosition: "right",
        presentation: 'modal',
        drawerPosition: 'right',
        drawerType: 'slide',
        drawerStyle: {
            width: '50%',
        },
        overlayColor: 'rgba(0, 0, 0, 0)',
        swipeEdgeWidth: 0,
        //         headerStyle: {
        //             backgroundColor: CIANO
        //         },
        //         headerTintColor: '#fff',
        //         headerTitleStyle: {
        //             fontWeight: 'bold'
        //         },
        //         logoTitle: {
        //             maxWidth: 110,
        //             maxHeight: 30
        //         },
        //         headerRightContainer: {
        //             alignItems: 'center',
        //             paddingRight: 10,
        //             width: "50%",
        //             flex: 2
        //         },
        //         searchIcon: {
        //             flexDirection: "row",
        //             flex: 2,
        //             padding: 10
        //         },
        //         menuIcon: {
        //             flex: 2,
        //             padding: 10
        // <<<<<<< Updated upstream
        //         },
    },
});
