import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ActionButton from "./ActionButton";
import SuccesfullSVG from "../../assets/icons/game/SuccesfullSVG";
import RejectSVG from "../../assets/icons/game/RejectSVG";

export default function ResultContainer({
    isCorrect,
    dishTitle,
    onNextLevel,
    onTryAgain,
    onGoBack,
}) {
    return (
        <View style={styles.resultContainer}>
            {isCorrect ? (
                <>
                    <SuccesfullSVG style={styles.icon} />

                    <Text style={styles.dishTitle}>{dishTitle}</Text>

                    <Text style={styles.mainTitle}>Level successfully passed</Text>

                    <Text style={styles.subtitle}>Keep going!</Text>

                    <ActionButton
                        title="Next level"
                        onPress={onNextLevel}
                        style={styles.nextButton}
                        textStyle={styles.nextButtonText}
                    />

                    <ActionButton
                        title="Go back"
                        onPress={onGoBack}
                        style={styles.backButton}
                        textStyle={styles.backButtonText}
                    />
                </>
            ) : (
                <>
                    <RejectSVG style={styles.icon} />

                    <Text style={styles.dishTitle}>{dishTitle}</Text>

                    <Text style={styles.mainTitle}>Game over!</Text>

                    <Text style={styles.subtitle}>Don’t worry! Try again)</Text>

                    <ActionButton
                        title="Try again"
                        onPress={onTryAgain}
                        style={styles.nextButton}
                        textStyle={styles.nextButtonText}
                    />

                    <ActionButton
                        title="Go back"
                        onPress={onGoBack}
                        style={styles.backButton}
                        textStyle={styles.backButtonText}
                    />
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    resultContainer: {
        alignItems: "center",
    },
    icon: {
        marginBottom: 27,
    },
    dishTitle: {
        fontFamily: "Inknut Antiqua",
        fontWeight: "600",
        fontSize: 22,
        textAlign: "center",
        color: "#CDA568",
        marginBottom: 50,
        lineHeight: 38,
        width: 264,
    },
    mainTitle: {
        fontFamily: "Inknut Antiqua",
        fontWeight: "600",
        fontSize: 18,
        textAlign: "center",
        color: "#FFFFFF",
        marginBottom: 16,
    },
    subtitle: {
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: 16,
        textAlign: "center",
        color: "#B9B9B9",
        marginBottom: 27,
    },
    nextButton: {
        backgroundColor: "#CDA568",
        marginBottom: 16,
        width: "100%",
        alignItems: "center",
    },
    nextButtonText: {
        fontFamily: "Inknut Antiqua",
        fontWeight: "600",
        fontSize: 18,
        textAlign: "center",
        color: "#020407",
    },
    backButton: {
        backgroundColor: "#000000",
        borderWidth: 1,
        borderColor: "#999999F7",
        width: "100%",
        alignItems: "center",
    },
    backButtonText: {
        fontFamily: "Inknut Antiqua",
        fontWeight: "600",
        fontSize: 18,
        textAlign: "center",
        color: "#FFFFFF",
    },
});
