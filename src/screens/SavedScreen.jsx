import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import LocationCard from '../components/LocationCard';
import { handleSendPress } from '../helpers/shareHelper';

const SavedScreen = () => {
    const savedLocations = useSelector((state) => state.places.savedPlaces);

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header />

            <View style={styles.container}>
                <FlatList
                    data={savedLocations}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContainer}
                    ListHeaderComponent={
                        <Text style={styles.header}>
                            {savedLocations.length > 0 ? 'Saved locations' : 'No saved locations yet'}
                        </Text>
                    }
                    ListFooterComponent={() => <View style={{ height: 100 }} />}
                    ItemSeparatorComponent={() => <View style={{ height: 19 }} />}
                    renderItem={({ item }) => (
                        <LocationCard
                            location={item}
                            onSendPress={handleSendPress}
                            isSaved={true}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

export default SavedScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#020407',
    },
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingVertical: 20,
    },
    header: {
        marginTop: 26,
        fontFamily: 'Inknut Antiqua',
        fontWeight: '600',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 19,
        color: '#CDA568',
    },
});
