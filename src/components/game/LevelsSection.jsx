import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LevelRow from "./LevelRow";

export default function LevelsSection({ levels, onPress }) {
    const firstRowLevels = levels.slice(0, 3);
    const otherRowLevels = levels.slice(3);

    return (
        <View style={styles.section}>
            <Text style={styles.levelsTitle}>Levels:</Text>
            <View style={styles.levelsContainer}>
                <LevelRow levels={firstRowLevels} rowStyle={styles.firstRow} onPress={onPress} />
                {otherRowLevels.length > 0 && (
                    <LevelRow levels={otherRowLevels} rowStyle={styles.otherRow} onPress={onPress} />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        marginBottom: 26,
    },
    levelsTitle: {
        fontFamily: "InknutAntiqua-Medium",
        fontWeight: "600",
        fontSize: 18,
        color: "#FFFFFF",
        marginBottom: 18,
    },
    firstRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 27,
    },
    otherRow: {
        flexDirection: "row",
        justifyContent: "center",
    },
});
