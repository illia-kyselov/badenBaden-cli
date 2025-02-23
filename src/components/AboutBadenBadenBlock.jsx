import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BookSVG from "../assets/icons/main/about/BookSVG";

export default function AboutBadenBadenBlock() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/icons/main/about/aboutBadenBaden.png")}
                style={styles.backgroundImage}
            />

            <View style={styles.overlay} />

            <View style={styles.content}>
                <BookSVG width={40} height={40} />

                <Text style={styles.title}>About Baden-Baden</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("About")}
                >
                    <Text style={styles.buttonText}>Read now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 209,
        position: "relative",
    },
    backgroundImage: {
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    overlay: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "#00000066",
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        marginTop: 12,
        fontFamily: "InknutAntiqua-Medium",
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 30,
        letterSpacing: 0,
        textAlign: "center",
        color: "#FFFFFF",
        marginBottom: 16,
    },
    button: {
        width: 165,
        height: 40,
        borderWidth: 1.45,
        borderColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: "center",
        color: "#FFFFFF",
    },
});
