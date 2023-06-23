import { Button, Layout, Text, useTheme } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import style from './FoodDiaryScreen.style'
import { ScrollView } from 'react-native-virtualized-view'
import Spacer from '../../components/Spacer/Spacer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import UserFoodModel from '../../models/UserFoodModel'
import FullScreenModal from '../../components/FullScreenModal/FullScreenModal'
import SetupMacroScreen from '../SetupMacroScreen/SetupMacroScreen'
import UserFoodItem from '../../components/UserFoodItem/UserFoodItem'
import MealModel, { MealArray } from '../../models/MealModel'
import { TouchableOpacity } from 'react-native'
import globalStyle from '../../styles/global-style'
import { getStoredMeals, setStoredMeals } from '../../redux/actions/foodActions'
import {
    calculateMacros,
    setStoredMacros,
} from '../../redux/actions/dietActions'
import DateSelector from '../../components/DateSelector/DateSelector'
import {
    getFormattedDate,
    getNextDay,
    getPrevDay,
} from '../../misc/dateFormatting'
import ViewMealScreen from '../ViewMealScreen/ViewMealScreen'
import { MEAL_TYPES } from '../../redux/types/types'

function FoodDiaryScreen({ navigation }: any) {
    const theme = useTheme()

    const [editingDisabled, setEditingDisabled] = useState(false)

    const diet = useSelector((state: RootState) => state.diet)
    const foodDiary = useSelector((state: RootState) => state.foodDiary)

    const dispatch = useDispatch()

    const [currentDate, setCurrentDate] = useState<Date>(new Date())
    const [selectedDate, setSelectedDate] = useState<Date>(currentDate)

    const [statsEditVisible, setStatsEditVisible] = useState(false)
    const [mealScreenVisible, setMealScreenVisible] = useState(false)

    const [addedFoods, setAddedFoods] = useState<MealModel>({
        Breakfast: [],
        Lunch: [],
        Dinner: [],
        Snack: [],
    })
    const [selectedMeal, setSelectedMeal] = useState<MEAL_TYPES>('Breakfast')

    useEffect(() => {
        if (selectedDate.toDateString() == currentDate.toDateString()) {
            console.log('I HAVE SAVED THE MEALS')
            setStoredMeals(foodDiary.meals)
            setStoredMacros({
                cals: diet.currentCals,
                carbs: diet.currentCarbs,
                fats: diet.currentFats,
                protein: diet.currentProteins,
            })
        }

        getStoredMeals(getFormattedDate(selectedDate)).then((meals) => {
            setAddedFoods(meals)
        })
    }, [foodDiary.meals, selectedDate])

    useEffect(() => {
        if (selectedDate.toDateString() != currentDate.toDateString()) {
            setEditingDisabled(true)
        } else {
            setEditingDisabled(false)
        }
        getStoredMeals(getFormattedDate(selectedDate)).then((foods) => {
            setAddedFoods(foods)
        })
    }, [selectedDate])

    useEffect(() => {
        dispatch(calculateMacros(addedFoods))
    }, [addedFoods])

    return (
        <Layout style={{ flex: 1 }} level="4">
            <ScrollView
                contentContainerStyle={style.DietScreen}
                scrollEnabled
                showsVerticalScrollIndicator
                nestedScrollEnabled
            >
                <DateSelector
                    selectedDay={selectedDate}
                    onNextDay={() => {
                        console.log(getNextDay(selectedDate))
                        setSelectedDate(getNextDay(selectedDate))
                    }}
                    onNextLong={() => setSelectedDate(currentDate)}
                    onPrevDay={() => {
                        console.log(getPrevDay(selectedDate))
                        setSelectedDate(getPrevDay(selectedDate))
                    }}
                    nextDisabled={
                        selectedDate.toDateString() ==
                        currentDate.toDateString()
                    }
                    prevDisabled={false}
                />
                <Spacer />
                <Layout style={globalStyle.Container} level="1">
                    <Layout style={globalStyle.SpaceBetween}>
                        <Text category="h6">Stats</Text>
                        <Button
                            size={'small'}
                            onPress={() => {
                                setStatsEditVisible(true)
                            }}
                        >
                            <Text>Edit</Text>
                        </Button>
                    </Layout>

                    <Spacer />

                    <Text category="p1">Calories</Text>
                    <ProgressBar
                        current={diet.currentCals}
                        max={diet.maxCals}
                        sign={'Kcal'}
                        color={theme['color-primary-300']}
                    />

                    <Spacer />

                    <Text category="p1">Carbohydrates</Text>
                    <ProgressBar
                        current={diet.currentCarbs}
                        max={diet.maxCarbs}
                        sign={'g'}
                        color={theme['color-success-500']}
                    />

                    <Spacer />

                    <Text category="p1">Fats</Text>
                    <ProgressBar
                        current={diet.currentFats}
                        max={diet.maxFats}
                        sign={'g'}
                        color={theme['color-warning-500']}
                    />

                    <Spacer />

                    <Text category="p1">Protein</Text>
                    <ProgressBar
                        current={diet.currentProteins}
                        max={diet.maxProteins}
                        sign={'g'}
                        color={theme['color-danger-500']}
                    />
                    <Spacer />
                </Layout>

                <Spacer />

                {MealArray.map((meal, index) => {
                    // @ts-ignore
                    return (
                        <React.Fragment key={index}>
                            <Layout style={globalStyle.Container} level="1">
                                <TouchableOpacity
                                    onPress={() => {
                                        setSelectedMeal(meal)
                                        setMealScreenVisible(true)
                                    }}
                                >
                                    {/*@ts-ignore*/}
                                    <Layout style={globalStyle.Center}>
                                        <Text>
                                            Total: {/*@ts-ignore*/}
                                            {addedFoods[meal]
                                                .reduce(
                                                    (acc, cur) =>
                                                        acc +
                                                        (cur.baseQuantity *
                                                            cur.food.calories) /
                                                            100,
                                                    0
                                                )
                                                .toFixed(2)}{' '}
                                            Kcal
                                        </Text>
                                    </Layout>
                                    <Layout style={globalStyle.SpaceBetween}>
                                        <Text category="h6">{meal}</Text>
                                        {!editingDisabled && (
                                            <TouchableOpacity
                                                style={style.AddButton}
                                                disabled={editingDisabled}
                                                onPress={() => {
                                                    navigation.navigate(
                                                        'Foods',
                                                        {
                                                            meal: meal,
                                                        }
                                                    )
                                                }}
                                            >
                                                <Text category={'h1'}>+</Text>
                                            </TouchableOpacity>
                                        )}
                                    </Layout>

                                    <Spacer />

                                    <Layout
                                        level={'1'}
                                        style={{
                                            ...style.ItemContainer,
                                        }}
                                    >
                                        {addedFoods[meal].length > 0 && (
                                            <>
                                                {addedFoods[meal].map(
                                                    (
                                                        userFood: UserFoodModel
                                                    ) => {
                                                        return (
                                                            <UserFoodItem
                                                                key={
                                                                    new Date().getMonth() +
                                                                    Math.random() *
                                                                        100000
                                                                }
                                                                quantity={
                                                                    userFood.quantity
                                                                }
                                                                baseQuantity={
                                                                    userFood.baseQuantity
                                                                }
                                                                quantityType={
                                                                    userFood.quantityType
                                                                }
                                                                item={
                                                                    userFood.food
                                                                }
                                                                onPress={() => {}}
                                                            />
                                                        )
                                                    }
                                                )}
                                            </>
                                        )}
                                    </Layout>
                                </TouchableOpacity>
                            </Layout>
                            <Spacer />
                        </React.Fragment>
                    )
                })}
            </ScrollView>
            <FullScreenModal
                visible={statsEditVisible}
                onBackdropPress={() => setStatsEditVisible(false)}
            >
                <SetupMacroScreen
                    onBack={() => setStatsEditVisible(false)}
                    afterSubmit={() => setStatsEditVisible(false)}
                />
            </FullScreenModal>
            <FullScreenModal
                visible={mealScreenVisible}
                onBackdropPress={() => setMealScreenVisible(false)}
            >
                <ViewMealScreen
                    afterSubmit={() => setMealScreenVisible(false)}
                    onBack={() => setMealScreenVisible(false)}
                    meals={addedFoods}
                    currentMeal={selectedMeal}
                />
            </FullScreenModal>
        </Layout>
    )
}

export default FoodDiaryScreen
