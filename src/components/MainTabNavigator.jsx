import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import PartySVG from "../assets/icons/navbar/PartySVG";
import MapSVG from "../assets/icons/navbar/MapSVG";
import SearchSVG from "../assets/icons/navbar/SearchSVG";
import BookmarkSVG from "../assets/icons/navbar/BookmarkSVG";
import QuizSVG from "../assets/icons/navbar/QuizSVG";

import HomeScreen from "../screens/HomeScreen";
import GameScreen from "../screens/GameScreen";
import SavedScreen from "../screens/SavedScreen";
import MapScreen from "../screens/MapScreen";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryScreen from "../screens/CategoryScreen";

const Tab = createBottomTabNavigator();
const SearchStack = createStackNavigator();

function SearchStackScreen() {
    return (
        <SearchStack.Navigator screenOptions={{ headerShown: false }}>
            <SearchStack.Screen name="Home" component={HomeScreen} />
            <SearchStack.Screen name="CategoryScreen" component={CategoryScreen} />
        </SearchStack.Navigator>
    );
}

export default function MainTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Search"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#000",
                tabBarInactiveTintColor: "#fff",
                tabBarActiveBackgroundColor: "#CDA568",
                tabBarStyle: {
                    position: "absolute",
                    marginHorizontal: 32,
                    bottom: 48,
                    backgroundColor: "#010204",
                    borderWidth: 1,
                    borderColor: "#CDA568",
                    shadowColor: "transparent",
                    elevation: 0,
                    // height: 60,
                },
            }}
        >
            <Tab.Screen
                name="Party"
                component={HomeScreen}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.replace("LoadingScreen", { categoryName: "Surprise me" });
                    },
                })}
                options={{
                    tabBarIcon: ({ color }) => <PartySVG color={color} />,
                }}
            />

            <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                    tabBarIcon: ({ color }) => <MapSVG color={color} />,
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchStackScreen}
                options={{
                    tabBarIcon: ({ color }) => <SearchSVG color={color} />,
                }}
            />
            <Tab.Screen
                name="Bookmark"
                component={SavedScreen}
                options={{
                    tabBarIcon: ({ color }) => <BookmarkSVG color={color} />,
                }}
            />
            <Tab.Screen
                name="Quiz"
                component={GameScreen}
                options={{
                    tabBarIcon: ({ color }) => <QuizSVG color={color} />,
                }}
            />
        </Tab.Navigator>
    );
}

