import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
    return (
        <View style={styles.header}>
            <Image
                source={require("../assets/icons/main/header/B.png")}
                resizeMode="cover"
            />
            <Image
                source={require("../assets/icons/main/header/CusineBadenBaden.png")}
                resizeMode="cover"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#020407",
    },
    header: {
        width: "100%",
        height: 116,
        backgroundColor: "#020407",
        borderBottomWidth: 1,
        borderBottomColor: "#CDA568",

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 20
    },
});
