import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import { addToSavedPlaces, removeFromSavedPlaces } from '../store/slices/placesSlice';
import { handleSendPress } from '../helpers/shareHelper';

import Header from '../components/Header';
import LocationCard from '../components/LocationCard';

const MapScreen = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const savedPlaces = useSelector((state) => state.places.savedPlaces);
    const categories = useSelector((state) => state.places.categories);
    const dispatch = useDispatch();

    const allPlaces = categories.flatMap(category => category.places);

    const initialRegion = {
        latitude: 48.7623,
        longitude: 8.2256,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    const parseCoordinates = (coordinateStr) => {
        const [latStr, lonStr] = coordinateStr.split(',');
        const latitude = parseFloat(latStr);
        const longitude = parseFloat(lonStr);
        return { latitude, longitude };
    };

    const handleMarkerPress = (location) => {
        setSelectedLocation(location);
    };

    const handleBookmarkPress = (location) => {
        const isSaved = savedPlaces.some((place) => place.id === location.id);
        if (isSaved) {
            dispatch(removeFromSavedPlaces(location.id));
        } else {
            dispatch(addToSavedPlaces(location));
        }
    };

    const handleClosePress = () => {
        setSelectedLocation(null);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header />
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={initialRegion}
                    showsUserLocation={true}
                    userInterfaceStyle="dark"
                >
                    {allPlaces.map((place) => (
                        <Marker
                            key={place.id}
                            coordinate={parseCoordinates(place.coordinates)}
                            onPress={() => handleMarkerPress(place)}
                        />
                    ))}
                </MapView>

                {selectedLocation && (
                    <View style={styles.cardContainer}>
                        <LocationCard
                            location={selectedLocation}
                            onRoutePress={() => { }}
                            onBookmarkPress={() => handleBookmarkPress(selectedLocation)}
                            onSendPress={handleSendPress}
                            isSaved={savedPlaces.some(place => place.id === selectedLocation?.id)}
                        />
                        <TouchableOpacity style={styles.closeButton} onPress={handleClosePress}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#020407',
    },
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    cardContainer: {
        position: 'absolute',
        left: 32,
        right: 32,
        bottom: 110,
        alignItems: 'center',
    },
    closeButton: {
        marginTop: 10,
    },
    closeButtonText: {
        fontFamily: 'Inknut Antiqua',
        fontWeight: '600',
        fontSize: 18,
        color: '#fff',
    },
});
