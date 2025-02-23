import React from "react";
import { View } from "react-native";
import LevelItem from "./LevelItem";

export default function LevelRow({ levels, rowStyle, onPress }) {
    return (
        <View style={rowStyle}>
            {levels.map((level) => (
                <LevelItem key={level.id} level={level} onPress={onPress} />
            ))}
        </View>
    );
}
