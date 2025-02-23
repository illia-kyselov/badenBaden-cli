import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HowToPlaySection() {
    const bullets = [
        "Each round, you’ll be given a description of a dish and a photo.",
        "Your task is to guess the correct dish from the options provided.",
    ];

    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>How to Play:</Text>

            {bullets.map((item, index) => (
                <View style={styles.listItem} key={index}>
                    <Text style={styles.bulletSymbol}>•</Text>
                    <Text style={styles.bulletText}>{item}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        marginBottom: 26,
    },
    sectionTitle: {
        fontFamily: "InknutAntiqua-Medium",
        fontWeight: "600",
        fontSize: 18,
        color: "#FFFFFF",
        marginBottom: 16,
    },
    listItem: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    bulletSymbol: {
        color: "#B9B9B9",
        fontSize: 16,
        lineHeight: 22,
        marginRight: 8,
    },
    bulletText: {
        flex: 1,
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: 16,
        color: "#B9B9B9",
        lineHeight: 22,
    },
});
