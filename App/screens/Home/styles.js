import { StyleSheet } from 'react-native';

// export default StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center'
//     },
//     input: {
//         height: 48,
//         borderRadius: 5,
//         overflow: 'hidden',
//         backgroundColor: 'white',
//         marginTop: 10,
//         marginBottom: 10,
//         marginLeft: 30,
//         marginRight: 30,
//         paddingLeft: 16
//     }
// })

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    list: {
        padding: 16,
    },
    item: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00c',
    },
});
