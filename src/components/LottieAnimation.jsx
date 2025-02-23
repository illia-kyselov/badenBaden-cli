import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default function LottieAnimation({ source }) {
    return (
        <View style={styles.container}>
            <View style={styles.backgroundCircle} />
            <LottieView
                source={source}
                autoPlay
                loop
                style={styles.lottie}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 180,
        alignItems: "center",
        justifyContent: "center",
    },
    backgroundCircle: {
        position: "absolute",
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: "#463c3c",
    },
    lottie: {
        width: 160,
        height: 160,
    },
});
