import { Button, Layout, Text, useTheme, Input } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import style from './DietScreent.style'
import { ScrollView } from 'react-native-virtualized-view'
import Spacer from '../../components/Spacer/Spacer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import {
    addOneFoodToStorage,
    calculateMacros,
    getMaxMacros,
    getStoredFoods,
    removeOneFoodFromStorage,
} from '../../redux/actions/dietActions'
import UserFoodModel from '../../models/UserFoodModel'
import UserFoodItem from '../../components/UserFoodItem/UserFoodItem'
import { useIsFocused } from '@react-navigation/native'
import FullScreenModal from '../../components/FullScreenModal/FullScreenModal'
import SetupMacroScreen from '../SetupMacroScreen/SetupMacroScreen'

function DietScreen({ navigation }: any) {
    const diet = useSelector((state: RootState) => state.diet)
    const dispatch = useDispatch()
    const isFocused = useIsFocused()

    const [statsEditVisible, setStatsEditVisible] = useState(false)

    const [addedFoods, setAddedFoods] = useState<UserFoodModel[]>([])

    const theme = useTheme()

    const updateFood = (userFood: UserFoodModel) => {
        if (userFood.quantity <= 0) {
            setAddedFoods((old) => {
                return old.filter((userFood) => userFood.quantity > 0)
            })
        }
    }

    // ! RELOAD DATA ON SCREEN FOCUSED
    useEffect(() => {
        if (isFocused) {
            getStoredFoods().then((foods) => {
                setAddedFoods(foods)
            })
            calculateMacros().then((action) => {
                dispatch(action)
            })
        }
    }, [isFocused])

    return (
        <Layout style={{ flex: 1 }} level="4">
            <ScrollView
                contentContainerStyle={style.DietScreen}
                scrollEnabled
                showsVerticalScrollIndicator
                nestedScrollEnabled
            >
                <Layout style={style.StatContainer} level="1">
                    <Layout style={style.StatHeader}>
                        <Text category="h4">Stats</Text>
                        <Button
                            onPress={() => {
                                setStatsEditVisible(true)
                            }}
                        >
                            <Text>Edit</Text>
                        </Button>
                    </Layout>

                    <Spacer />

                    <Text category="h6">Calories</Text>
                    <ProgressBar
                        current={diet.currentCals}
                        max={diet.maxCals}
                        sign={'Kcal'}
                        color={theme['color-primary-300']}
                    />

                    <Spacer />

                    <Text category="h6">Carbohydrates</Text>
                    <ProgressBar
                        current={diet.currentCarbs}
                        max={diet.maxCarbs}
                        sign={'g'}
                        color={theme['color-success-500']}
                    />

                    <Spacer />

                    <Text category="h6">Fats</Text>
                    <ProgressBar
                        current={diet.currentFats}
                        max={diet.maxFats}
                        sign={'g'}
                        color={theme['color-warning-500']}
                    />

                    <Spacer />

                    <Text category="h6">Protein</Text>
                    <ProgressBar
                        current={diet.currentProteins}
                        max={diet.maxProteins}
                        sign={'g'}
                        color={theme['color-danger-500']}
                    />
                </Layout>

                <Spacer />

                <Layout style={style.StatContainer} level="1">
                    <Layout style={style.StatHeader}>
                        <Text category="h5">Foods</Text>
                        <Button onPress={() => navigation.navigate('Foods')}>
                            <Text category="h4">Add</Text>
                        </Button>
                    </Layout>

                    <Spacer />

                    {addedFoods.length > 0 ? (
                        <Layout
                            level={'4'}
                            style={{
                                ...style.ItemContainer,
                            }}
                        >
                            {addedFoods.map((userFood: UserFoodModel) => {
                                return (
                                    <UserFoodItem
                                        key={
                                            new Date().getMonth() +
                                            Math.random() * 100000
                                        }
                                        quantity={userFood.quantity}
                                        item={userFood.food}
                                        onPress={() => {}}
                                        onPressAdd={() => {
                                            userFood.quantity += 1
                                            updateFood(userFood)
                                            addOneFoodToStorage(
                                                userFood.food
                                            ).then(() => {
                                                calculateMacros().then(
                                                    (action) => {
                                                        dispatch(action)
                                                    }
                                                )
                                            })
                                        }}
                                        onPressRemove={() => {
                                            userFood.quantity -= 1
                                            updateFood(userFood)
                                            removeOneFoodFromStorage(
                                                userFood.food
                                            ).then(() => {
                                                calculateMacros().then(
                                                    (action) => {
                                                        dispatch(action)
                                                    }
                                                )
                                            })
                                        }}
                                    />
                                )
                            })}
                        </Layout>
                    ) : (
                        <Text>No hungry?</Text>
                    )}
                </Layout>
                <Spacer />
                <Layout style={style.StatContainer} level="1"></Layout>
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

export default DietScreen
