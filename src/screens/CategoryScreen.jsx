import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {
    addToSavedPlaces,
    removeFromSavedPlaces,
} from '../store/slices/placesSlice';
import LocationCard from '../components/LocationCard';
import { handleSendPress } from '../helpers/shareHelper';

const CategoryScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const selectedCategory = useSelector((state) => state.places.selectedCategory);
    const selectedPlace = useSelector((state) => state.places.selectedPlace);
    const savedPlaces = useSelector((state) => state.places.savedPlaces);

    const isSaved = selectedPlace
        ? savedPlaces.some((place) => place.id === selectedPlace.id)
        : false;

    const handleSearchAgain = () => {
        navigation.replace('LoadingScreen', { categoryName: selectedCategory });
    };

    const handleBackHome = () => {
        navigation.navigate('Home');
    };

    const handleBookmarkPress = () => {
        if (selectedPlace) {
            if (isSaved) {
                dispatch(removeFromSavedPlaces(selectedPlace.id));
            } else {
                dispatch(addToSavedPlaces(selectedPlace));
            }
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Your perfect location:</Text>

                {selectedPlace ? (
                    <LocationCard
                        location={{ ...selectedPlace, image: selectedPlace.image }}
                        onBookmarkPress={handleBookmarkPress}
                        onSendPress={handleSendPress}
                        isSaved={isSaved}
                    />
                ) : (
                    <Text style={{ color: '#FFF' }}>No place selected yet</Text>
                )}

                <TouchableOpacity
                    style={styles.searchAgainButton}
                    onPress={handleSearchAgain}
                >
                    <Text style={styles.searchAgainButtonText}>Search again</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.backHomeButton}
                    onPress={handleBackHome}
                >
                    <Text style={styles.backHomeButtonText}>Back home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default CategoryScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#020407',
    },
    container: {
        flex: 1,
        backgroundColor: '#010204',
        paddingHorizontal: 32,
        borderTopWidth: 1,
        borderTopColor: '#CDA568',
    },
    title: {
        color: '#CDA568',
        fontFamily: 'InknutAntiqua-Medium',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 30,
        textAlign: 'center',
        marginBottom: 24,
        marginTop: 26,
    },
    searchAgainButton: {
        backgroundColor: '#CDA568',
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 34,
        marginTop: 20,
        paddingHorizontal: 76,
        paddingVertical: 18,
    },
    searchAgainButtonText: {
        color: '#020407',
        fontWeight: '700',
        fontFamily: 'Montserrat',
        fontSize: 16,
    },
    backHomeButton: {
        alignItems: 'center',
    },
    backHomeButtonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
        fontFamily: 'Montserrat',
    },
});
