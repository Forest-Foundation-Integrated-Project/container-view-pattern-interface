import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default ErrorMessage = ({ errorValue }) => {
    return errorValue ? (
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorValue}</Text>
        </View>
    ) : null;
};

const styles = StyleSheet.create({
    errorContainer: {
        marginVertical: 5,
    },
    errorText: {
        color: "#F73216",
        fontWeight: 'bold'
    },
})