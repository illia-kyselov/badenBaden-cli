import React from "react";
import { Text, StyleSheet } from "react-native";

export default function DishTitle({ dishId, name }) {
    return (
        <Text style={styles.dishTitle}>
            Dish {dishId}: {name}
        </Text>
    );
}

const styles = StyleSheet.create({
    dishTitle: {
        fontFamily: "Inknut Antiqua",
        fontWeight: "600",
        fontSize: 22,
        color: "#CDA568",
        marginBottom: 27,
        lineHeight: 38,
        letterSpacing: 0,
    },
});
