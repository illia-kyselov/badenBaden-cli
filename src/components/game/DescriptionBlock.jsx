import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DescriptionBlock({ description }) {
    return (
        <View>
            <Text style={styles.descriptionTitle}>Description:</Text>
            <Text style={styles.descriptionText}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    descriptionTitle: {
        fontFamily: "Inknut Antiqua",
        fontWeight: "600",
        fontSize: 18,
        color: "#FFFFFF",
        marginBottom: 16,
    },
    descriptionText: {
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: 16,
        color: "#B9B9B9",
        marginBottom: 27,
    },
});
