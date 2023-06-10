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
        position: "absolute",
        //marginVertical: 5,
        bottom: -15,
        left: 0,
    },
    errorText: {
        color: "#F73216",
        fontWeight: 'bold'
    },
})