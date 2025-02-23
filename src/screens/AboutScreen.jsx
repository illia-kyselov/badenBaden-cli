import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import BookSVG from '../assets/icons/main/about/BookSVG';
import { handleSendPress } from '../helpers/shareHelper';

export default function AboutScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Header />
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Image
                        source={require('../assets/icons/main/about/aboutBadenBaden.png')}
                        style={styles.backgroundImage}
                    />
                    <View style={styles.textContainer}>
                        <View style={styles.titleRow}>
                            <BookSVG style={styles.bookIcon} />
                            <Text style={styles.title}>About Baden-Baden</Text>
                        </View>

                        <Text style={styles.paragraph}>
                            Baden-Baden is a charming spa town located in the southwestern part of
                            Germany, renowned for its healing thermal waters, rich history, and
                            cultural significance. Known as the "Gateway to the Black Forest," the
                            town offers visitors a unique blend of relaxation, luxury, and nature.
                        </Text>

                        <Text style={styles.paragraph}>
                            Famous for its Roman baths and modern wellness resorts, Baden-Baden
                            has been a sought-after destination for centuries. The town also
                            boasts elegant parks, the historic Casino Baden-Baden, and world-class
                            cultural venues like the Festspielhaus. Visitors can explore beautiful
                            hiking trails, enjoy local wine, and indulge in delicious cuisine.
                        </Text>

                        <Text style={styles.paragraph}>
                            Whether you’re seeking relaxation, adventure, or cultural experiences,
                            Baden-Baden offers something for everyone.
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.shareButton}
                        onPress={() =>
                            handleSendPress({
                                name: 'BadenBaden Explorer',
                                description:
                                    'Discover the charm of Baden-Baden and plan your perfect getaway with our app. Enjoy guided tours, hidden spots, and local culture!',
                                rating: 5,
                            })
                        }
                    >
                        <Text style={styles.shareButtonText}>Share</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#010204',
    },
    container: {
        flex: 1,
        backgroundColor: '#010204',
    },
    backgroundImage: {
        width: '100%',
        height: 209,
    },
    scrollContainer: {
        flexGrow: 1,
    },
    textContainer: {
        paddingHorizontal: 32,
        paddingTop: 32,
        borderTopWidth: 1,
        borderTopColor: '#CDA568',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 22,
    },
    bookIcon: {
        marginRight: 14,
    },
    title: {
        fontFamily: 'InknutAntiqua-Medium',
        fontWeight: '600',
        fontSize: 18,
        letterSpacing: 0,
        color: '#FFFFFF',
    },
    paragraph: {
        fontFamily: 'Montserrat',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0,
        color: '#FFFFFF',
    },
    shareButton: {
        backgroundColor: '#CDA568',
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 34,
        marginTop: 20,
        paddingHorizontal: 76,
        paddingVertical: 18,
    },
    shareButtonText: {
        color: '#020407',
        fontWeight: '700',
        fontFamily: 'Montserrat',
        fontSize: 16,
    },
});
