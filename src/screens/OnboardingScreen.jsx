import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const slides = [
    {
        id: '1',
        title: 'Welcome to Cuisine Baden-Baden!',
        description:
            'Your ultimate guide to the best dining spots in Baden-Baden. Here’s how to make the most of your experience:',
        image: require('../assets/icons/onboarding/Onboarding1.png'),
        buttonTitle: 'Get Started',
    },
    {
        id: '2',
        title: 'Explore by Categories',
        description:
            'Easily choose your perfect restaurant or bar from four exciting categories.',
        image: require('../assets/icons/onboarding/Onboarding2.png'),
        buttonTitle: 'Next',
    },
    {
        id: '3',
        title: 'Surprise Me!',
        description:
            "Can't decide? Use our randomizer to pick a location for you.",
        image: require('../assets/icons/onboarding/Onboarding3.png'),
        buttonTitle: 'Next',
    },
    {
        id: '4',
        title: 'Interactive Map',
        description:
            'Find all your favorite spots on our interactive map, so you never miss out on a great meal.',
        image: require('../assets/icons/onboarding/Onboarding4.png'),
        buttonTitle: 'Next',
    },
    {
        id: '5',
        title: 'Saved Locations',
        description:
            'Save your top spots for quick access anytime you need a great recommendation.',
        image: require('../assets/icons/onboarding/Onboarding5.png'),
        buttonTitle: 'Next',
    },
    {
        id: '6',
        title: 'Culinary Quiz',
        description:
            'Test your culinary knowledge! Guess the dish based on its description and photo for a fun challenge.',
        image: require('../assets/icons/onboarding/Onboarding6.png'),
        buttonTitle: 'Start exploring',
    },
];

const OnboardingScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigation = useNavigation();

    const handleNext = async () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            await AsyncStorage.setItem('hasSeenOnboarding', 'true');
            navigation.replace('MainTabs');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={slides[currentIndex].image} style={styles.image} resizeMethod="cover" />
                <LinearGradient
                    colors={['rgba(1, 2, 4, 0)', '#010204']}
                    start={[0, 0]}
                    end={[0, 1]}
                    style={styles.gradient}
                />
                <View style={styles.textBlock}>
                    <Image source={require('../assets/loadingIcon.png')} style={styles.header} resizeMethod="cover" />
                </View>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.title}>{slides[currentIndex].title}</Text>
                <Text style={styles.description}>
                    {slides[currentIndex].description}
                </Text>
                <TouchableOpacity onPress={handleNext} style={styles.button}>
                    <Text style={styles.buttonText}>
                        {slides[currentIndex].buttonTitle}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#020407',
        alignItems: 'center',
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: 447,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    gradient: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    textBlock: {
        position: 'absolute',
        bottom: 60,
        left: 60,
        right: 60,
        alignItems: 'center',
    },
    header: {
        width: '100%',
        resizeMode: 'cover',
    },
    contentContainer: {
        width: '100%',
        backgroundColor: '#020407',
        borderTopWidth: 1,
        borderTopColor: '#CDA568',
        paddingVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 42,
    },
    title: {
        fontFamily: 'InknutAntiqua-Medium',
        fontWeight: 600,
        fontSize: 24,
        lineHeight: 26,
        letterSpacing: 0,
        color: '#CDA568',
        marginBottom: 35,
        textAlign: 'center',
        paddingHorizontal: 13,
        paddingTop: 41,
    },
    description: {
        fontFamily: 'Montserrat',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 20,
        color: '#FFF',
        marginBottom: 23,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#CDA568',
        paddingVertical: 18,
        paddingHorizontal: 66,
    },
    buttonText: {
        fontFamily: 'MontserratBold',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        color: '#020407',
    },
});

export default OnboardingScreen;
