import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet } from 'react-native';

const CIANO = '#00B0AE'

export const styles = StyleSheet.create({
    headerNavigation: {
        headerStyle: {
            backgroundColor: CIANO,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        
    },

});