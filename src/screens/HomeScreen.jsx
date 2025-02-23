import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';

import Header from '../components/Header';
import AboutBadenBadenBlock from '../components/AboutBadenBadenBlock';
import CategoriesSection from '../components/CategoriesSection';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <Header />
                <AboutBadenBadenBlock />
                <CategoriesSection />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#010204',
    },
});
