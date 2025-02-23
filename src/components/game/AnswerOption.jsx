import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function AnswerOption({ optionText, isSelected, onPress, marginBottom }) {
    return (
        <TouchableOpacity
            style={[
                styles.optionButton,
                isSelected && styles.optionButtonSelected,
                { marginBottom },
            ]}
            onPress={onPress}
        >
            <Text style={styles.optionText}>{optionText}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    optionButton: {
        backgroundColor: "#000000",
        borderWidth: 1,
        borderColor: "#999999F7",
        padding: 14,
    },
    optionButtonSelected: {
        backgroundColor: "#CDA568",
        borderWidth: 1,
        borderColor: "#999999F7",
    },
    optionText: {
        fontFamily: "Inknut Antiqua",
        fontWeight: "600",
        fontSize: 18,
        textAlign: "center",
        color: "#FFFFFF",
    },
});
