import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { completeLevel } from '../store/slices/quizSlice';
import AnswerOption from '../components/game/AnswerOption';
import DescriptionBlock from '../components/game/DescriptionBlock';
import DishTitle from '../components/game/DishTitle';
import OkButton from '../components/game/OkButton';
import ResultContainer from '../components/game/ResultContainer';

export default function QuestionScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const { levelId } = route.params;

    const level = useSelector((state) =>
        state.quiz.levels.find((lvl) => lvl.id === levelId)
    );

    const [selectedOption, setSelectedOption] = useState(null);
    const [answered, setAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    if (!level) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.contentWrapper}>
                    <Text style={{ color: '#fff' }}>Level not found</Text>
                </View>
            </SafeAreaView>
        );
    }

    const handleAnswerPress = (index) => {
        setSelectedOption(index);
    };

    const handleCheckAnswer = () => {
        setIsCorrect(selectedOption === level.correctIndex);
        setAnswered(true);
    };

    const handleNextLevel = () => {
        dispatch(completeLevel({ levelId }));
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentWrapper}>
                {!answered && (
                    <>
                        <DishTitle dishId={level.id} name={level.name} />

                        <DescriptionBlock description={level.description} />
                        {level.options.map((option, index) => {
                            const isSelected = selectedOption === index;
                            const isLast = index === level.options.length - 1;
                            return (
                                <AnswerOption
                                    key={index}
                                    optionText={option}
                                    isSelected={isSelected}
                                    onPress={() => handleAnswerPress(index)}
                                    marginBottom={isLast ? 19 : 16}
                                />
                            );
                        })}

                        <OkButton onPress={handleCheckAnswer} disabled={selectedOption === null} />
                    </>
                )}

                {answered && (
                    <ResultContainer
                        isCorrect={isCorrect}
                        onNextLevel={handleNextLevel}
                        dishTitle={`Dish ${level.id}: ${level.name}`}
                        onTryAgain={() => {
                            setAnswered(false);
                            setSelectedOption(null);
                        }}
                        onGoBack={() => navigation.goBack()}
                    />
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#010204',
    },
    contentWrapper: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 51,
        borderTopWidth: 1,
        borderTopColor: '#CDA568',
        backgroundColor: '#020407',
    },
});
