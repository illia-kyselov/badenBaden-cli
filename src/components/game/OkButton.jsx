import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function OkButton({ onPress, disabled }) {
    return (
        <TouchableOpacity
            style={[
                styles.okButtonBase,
                disabled ? styles.okButtonDisabled : styles.okButtonEnabled,
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.okButtonText}>Ok</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    okButtonBase: {
        padding: 14,
        alignItems: "center",
    },
    okButtonEnabled: {
        backgroundColor: "#CDA568",
    },
    okButtonDisabled: {
        backgroundColor: "#CDA56833",
    },
    okButtonText: {
        fontFamily: "Inknut Antiqua",
        fontWeight: "600",
        fontSize: 18,
        textAlign: "center",
        color: "#000000",
    },
});
