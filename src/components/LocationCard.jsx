import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking, Platform } from "react-native";
import { useDispatch } from "react-redux";
import { addToSavedPlaces, removeFromSavedPlaces } from "../store/slices/placesSlice";
import BookmarkSVG from "../assets/icons/saved/BookmarkSVG";
import SentSVG from "../assets/icons/saved/SentSVG";
import { parseCoordinates } from "../helpers/location";

const LocationCard = ({ location, onSendPress, isSaved }) => {
    const dispatch = useDispatch();

    const handleBookmarkPress = () => {
        if (isSaved) {
            dispatch(removeFromSavedPlaces(location.id));
        } else {
            dispatch(addToSavedPlaces(location));
        }
    };

    const openMap = () => {
        if (!location || !location.coordinates) return;

        const coords = parseCoordinates(location.coordinates);
        if (!coords) return;

        const url = Platform.select({
            ios: `maps://app?saddr=&daddr=${coords.latitude},${coords.longitude}`,
            android: `google.navigation:q=${coords.latitude},${coords.longitude}`,
        });

        if (url) {
            Linking.openURL(url).catch(err => console.error("Something went wrong!", err));
        }
    };

    if (!location) return null;

    return (
        <View style={styles.card}>
            {location.image && (
                <Image
                    source={
                        typeof location.image === "string"
                            ? { uri: location.image }
                            : location.image
                    }
                    style={styles.image}
                    resizeMode="cover"
                />
            )}

            <View style={styles.cartContent}>
                <Text style={styles.title}>{location.name}</Text>
                <Text style={styles.description}>{location.description}</Text>
                <Text style={styles.rating}>Rating: {location.rating} stars</Text>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.routeButton} onPress={openMap}>
                        <Text style={styles.routeButtonText}>Build the route</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.bookmarkButton, isSaved ? styles.bookmarkSaved : styles.bookmarkNotSaved]}
                        onPress={handleBookmarkPress}
                    >
                        <BookmarkSVG color={isSaved ? "" : "#fff"} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sendButton} onPress={() => onSendPress(location)}>
                        <SentSVG />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LocationCard;

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: "#CDA568",
        backgroundColor: "#010204",
        width: "100%",
    },
    cartContent: {
        padding: 15,
    },
    image: {
        width: "100%",
        height: 212,
        marginBottom: 16,
    },
    title: {
        fontFamily: "Inknut Antiqua",
        fontWeight: "600",
        fontSize: 18,
        color: "#CDA568",
        marginBottom: 10,
    },
    description: {
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: 16,
        color: "#B9B9B9",
        marginBottom: 10,
    },
    rating: {
        fontFamily: "Montserrat",
        fontWeight: "400",
        fontSize: 16,
        color: "#CDA568",
        marginBottom: 16,
    },
    buttonRow: {
        flexDirection: "row",
        gap: 10,
    },
    routeButton: {
        backgroundColor: "#CDA568",
        paddingVertical: 14,
        alignItems: "center",
        marginBottom: 10,
        flex: 1,
    },
    routeButtonText: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: 16,
        color: "#000",
    },
    bookmarkButton: {
        padding: 13,
        justifyContent: "center",
        alignItems: "center",
        height: 48,
    },
    bookmarkSaved: {
        backgroundColor: "#CDA568",
    },
    bookmarkNotSaved: {
        backgroundColor: "#020407",
        borderWidth: 1,
        borderColor: "#FFFFFF",
    },
    sendButton: {
        backgroundColor: "#020407",
        padding: 13,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        height: 48,
    },
});
