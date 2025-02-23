import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ActionButton({ title, onPress, style, textStyle }) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 14,
        alignItems: "center",
        width: "60%",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "600",
    },
});
