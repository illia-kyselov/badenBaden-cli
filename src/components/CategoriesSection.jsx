import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { setSelectedCategory } from "../store/slices/placesSlice";

import DrinkSVG from "../assets/icons/main/icons/DrinkSVG";
import MeatSVG from "../assets/icons/main/icons/MeatSVG";
import MeatChickenSVG from "../assets/icons/main/icons/MeatChickenSVG";
import SeatSVG from "../assets/icons/main/icons/SeatSVG";
import PartySVG from "../assets/icons/main/PartySVG";

const categories = [
    { name: "Gourmet Dining", Icon: MeatSVG },
    { name: "Casual Eats", Icon: MeatChickenSVG },
    { name: "Bars & Lounges", Icon: DrinkSVG },
    { name: "Local Delights", Icon: SeatSVG },
];

const CategoriesSection = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const selectedCategory = useSelector(
        (state) => state.places.selectedCategory
    );

    const handleCategoryPress = (categoryName) => {
        dispatch(setSelectedCategory(categoryName));
    };

    const handleStartExploring = () => {
        if (selectedCategory) {
            navigation.replace("LoadingScreen", {
                categoryName: selectedCategory,
            });
        }
    };

    const handlePartyPress = () => {
        navigation.replace("LoadingScreen", { categoryName: "Surprise me" });
    };

    const isCategorySelected = !!selectedCategory;
    const exploreButtonStyle = isCategorySelected
        ? styles.exploreButtonActive
        : styles.exploreButtonInactive;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explore Categories</Text>
            <View style={styles.grid}>
                {categories.map((category) => {
                    const IconComponent = category.Icon;
                    const isSelected = category.name === selectedCategory;

                    return (
                        <TouchableOpacity
                            key={category.name}
                            style={[
                                styles.categoryCell,
                                isSelected && styles.categoryCellSelected,
                            ]}
                            onPress={() => handleCategoryPress(category.name)}
                        >
                            <IconComponent width={40} height={40} />
                            <View style={styles.iconSpacing} />
                            <Text style={styles.categoryText}>
                                {category.name}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.exploreButtonBase, exploreButtonStyle]}
                    onPress={handleStartExploring}
                    disabled={!isCategorySelected}
                >
                    <Text style={styles.exploreButtonText}>
                        Start exploring
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.partyButton}
                    onPress={handlePartyPress}
                >
                    <PartySVG width={24} height={24} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CategoriesSection;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
        borderTopWidth: 1,
        borderTopColor: "#CDA568",
    },
    title: {
        fontFamily: "InknutAntiqua-Medium",
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 30,
        textAlign: "center",
        marginBottom: 24,
        marginTop: 26,
        color: "#CDA568",
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 8,
    },
    categoryCell: {
        backgroundColor: "#010204",
        borderWidth: 1,
        borderColor: "#363636",
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 12,
        alignItems: "center",
        justifyContent: "center",
        width: "48%",
    },
    categoryCellSelected: {
        borderColor: "#CDA568",
    },
    iconSpacing: {
        marginTop: 10,
    },
    categoryText: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: 14,
        lineHeight: 20,
        textAlign: "center",
        color: "#FFFFFF",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
    },
    exploreButtonBase: {
        flex: 1,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
    },
    exploreButtonInactive: {
        backgroundColor: "#CDA56833",
    },
    exploreButtonActive: {
        backgroundColor: "#CDA568",
    },
    exploreButtonText: {
        fontFamily: "Montserrat",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 20,
        textAlign: "center",
        color: "#020407",
    },
    partyButton: {
        backgroundColor: "#CDA568",
        width: 56,
        height: 56,
        padding: 12,
        marginLeft: 12,
        justifyContent: "center",
        alignItems: "center",
    },
});
