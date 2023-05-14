import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 15,
        marginVertical: 8,
        marginHorizontal: 8
    },
    imageContainer: {
        aspectRatio: 4 / 3, // altura é 3/4 da largura
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        width: "100%",
    },
    textContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: 8,
        paddingVertical: 4,
        paddingHorizontal: 4,
        flex: 1
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 2,
        paddingBottom: 2
    },
    subtitle: {
        fontSize: 12,
        color: '#666',
        paddingBottom: 10
    },
});