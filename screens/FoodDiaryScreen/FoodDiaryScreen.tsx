import { Button, Layout, Text, useTheme } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import style from './FoodDiaryScreen.style'
import { ScrollView } from 'react-native-virtualized-view'
import Spacer from '../../components/Spacer/Spacer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import UserFoodModel from '../../models/UserFoodModel'
import { useIsFocused } from '@react-navigation/native'
import FullScreenModal from '../../components/FullScreenModal/FullScreenModal'
import SetupMacroScreen from '../SetupMacroScreen/SetupMacroScreen'
import UserFoodItem from '../../components/UserFoodItem/UserFoodItem'
import MealModel, { MealArray } from '../../models/MealModel'
import { TouchableOpacity } from 'react-native'
import globalStyle from '../../styles/global-style'
import { setStoredMeals } from '../../redux/actions/foodActions'
import { calculateMacros } from '../../redux/actions/dietActions'

function FoodDiaryScreen({ navigation }: any) {
    const diet = useSelector((state: RootState) => state.diet)
    const foodDiary = useSelector((state: RootState) => state.foodDiary)

    const dispatch = useDispatch()
    const isFocused = useIsFocused()

    const [statsEditVisible, setStatsEditVisible] = useState(false)

    const [addedFoods, setAddedFoods] = useState<MealModel>({
        Breakfast: [],
        Lunch: [],
        Dinner: [],
        Snack: [],
    })

    const theme = useTheme()

    useEffect(() => {
        console.log(foodDiary)
        console.log(foodDiary.meals)

        setAddedFoods(foodDiary.meals)
        setStoredMeals(foodDiary.meals)
        dispatch(calculateMacros(foodDiary.meals))
    }, [foodDiary.meals])

    return (
        <Layout style={{ flex: 1 }} level="4">
            <ScrollView
                contentContainerStyle={style.DietScreen}
                scrollEnabled
                showsVerticalScrollIndicator
                nestedScrollEnabled
            >
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
                                {/*@ts-ignore*/}
                                <Layout style={globalStyle.Center}>
                                    <Text>
                                        Total: {/*@ts-ignore*/}
                                        {addedFoods[meal].reduce(
                                            (acc, cur) =>
                                                acc +
                                                cur.quantity *
                                                    cur.food.calories,
                                            0
                                        )}{' '}
                                        Kcal
                                    </Text>
                                </Layout>
                                <Layout style={globalStyle.SpaceBetween}>
                                    <Text category="h6">{meal}</Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate('Foods', {
                                                meal: meal,
                                            })
                                        }}
                                    >
                                        <Text category={'h3'}>+</Text>
                                    </TouchableOpacity>
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
                                                (userFood: UserFoodModel) => {
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
                                                            quantityType={
                                                                userFood.quantityType
                                                            }
                                                            item={userFood.food}
                                                            onPress={() => {}}
                                                        />
                                                    )
                                                }
                                            )}
                                        </>
                                    )}
                                </Layout>
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
        </Layout>
    )
}

export default FoodDiaryScreen
