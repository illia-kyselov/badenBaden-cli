import React from "react";
import { Text, StyleSheet } from "react-native";
import QuestionSVG from "../../assets/icons/game/QuestionSVG";

export default function GameTitle() {
    return (
        <>
            <QuestionSVG style={styles.questionIcon} />
            <Text style={styles.title}>
                Culinary Quiz:{"\n"}Guess the Dish!
            </Text>
        </>
    );
}

const styles = StyleSheet.create({
    questionIcon: {
        marginTop: 38,
        marginBottom: 27,
        alignSelf: "center",
    },
    title: {
        fontFamily: "InknutAntiqua-Medium",
        fontWeight: "600",
        fontSize: 22,
        lineHeight: 38,
        textAlign: "center",
        color: "#CDA568",
        marginBottom: 50,
    },
});
