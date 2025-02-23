import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import LottieAnimation from '../components/LottieAnimation';
import { getRandomPlaceByCategory, getRandomPlaceFromRandomCategory } from '../store/slices/placesSlice';

import DrinkSVG from '../assets/icons/main/icons/DrinkSVG';
import MeatSVG from '../assets/icons/main/icons/MeatSVG';
import MeatChickenSVG from '../assets/icons/main/icons/MeatChickenSVG';
import SeatSVG from '../assets/icons/main/icons/SeatSVG';
import PartySVG from '../assets/icons/main/icons/PartySVG';

export default function LoadingScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();

    const { categoryName } = route.params || {};

    const categoryIcons = {
        'Gourmet Dining': MeatSVG,
        'Casual Eats': MeatChickenSVG,
        'Bars & Lounges': DrinkSVG,
        'Local Delights': SeatSVG,
        'Surprise me': PartySVG,
    };

    useEffect(() => {
        if (categoryName) {
            if (categoryName === 'Surprise me') {
                dispatch(getRandomPlaceFromRandomCategory());
            } else {
                dispatch(getRandomPlaceByCategory(categoryName));
            }
        }
        const timer = setTimeout(() => {
            navigation.replace('MainTabs', {
                screen: 'Search',
                params: { screen: 'CategoryScreen' },
            });
        }, 4000);
        return () => clearTimeout(timer);
    }, [categoryName, dispatch, navigation]);

    const IconComponent = categoryIcons[categoryName] || null;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image
                    source={require('../assets/icons/main/about/aboutBadenBaden.png')}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                />
                <View style={styles.overlay} />
                {IconComponent && (
                    <View style={styles.selectedCategoryWrapper}>
                        <View style={[styles.categoryCell, styles.categoryCellSelected]}>
                            <IconComponent width={40} height={40} />
                            <View style={styles.iconSpacing} />
                            <Text style={styles.categoryText}>{categoryName}</Text>
                        </View>
                    </View>
                )}
            </View>

            <View style={styles.contentWrapper}>
                <Text style={styles.searchingTitle}>Searching...</Text>

                <View style={styles.animationWrapper}>
                    <LottieAnimation
                        source={{
                            uri: 'https://lottie.host/5fed5941-0670-4c1a-8a71-bb66014b6018/2g0dFLtzhE.lottie',
                        }}
                    />
                </View>

                <Text style={styles.waitText}>Wait...</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#020407',
        alignItems: 'center',
        paddingTop: 12,
    },
    imageWrapper: {
        width: '100%',
        height: 209,
        position: 'relative',
    },
    backgroundImage: {
        width: '100%',
        height: 209,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 209,
        backgroundColor: '#00000066',
    },
    selectedCategoryWrapper: {
        position: 'absolute',
        top: 45,
        left: '50%',
        transform: [{ translateX: -100 }],
        zIndex: 2,
    },
    categoryCell: {
        backgroundColor: '#010204',
        borderWidth: 1,
        borderColor: '#363636',
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
    },
    categoryCellSelected: {
        borderColor: '#CDA568',
    },
    iconSpacing: {
        marginTop: 10,
    },
    categoryText: {
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    contentWrapper: {
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#CDA568',
        width: '100%',
    },
    searchingTitle: {
        fontFamily: 'InknutAntiqua-Medium',
        fontWeight: '600',
        fontSize: 18,
        marginTop: 26,
        marginBottom: 28,
        color: '#CDA568',
    },
    animationWrapper: {
        width: 204,
        height: 204,
        marginBottom: 28,
    },
    waitText: {
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: 16,
        color: '#020407',
        paddingHorizontal: 104,
        paddingVertical: 18,
        backgroundColor: '#CDA568',
    },
});
