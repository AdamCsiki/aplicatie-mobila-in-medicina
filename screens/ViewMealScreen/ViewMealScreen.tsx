import { Button, Layout, Text } from '@ui-kitten/components'
import style from './ViewMealScreen.style'
import { useContext, useEffect, useState } from 'react'
import FullScreenModal from '../../components/FullScreenModal/FullScreenModal'
import EditFoodScreen from '../EditFoodScreen/EditFoodScreen'
import {
    NavigationProp,
    ParamListBase,
    RouteProp,
    useIsFocused,
} from '@react-navigation/native'
import UserFoodModel from '../../models/UserFoodModel'
import SearchList from '../../components/SearchList/SearchList'
import SearchFoodItemDetailed from '../../components/SearchFoodItemDetailed/SearchFoodItemDetailed'
import { MEAL_TYPES } from '../../redux/types/types'
import { NavbarContext } from '../../context/NavbarContext'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { getStoredMeals, setStoredMeals } from '../../redux/actions/foodActions'
import { getFormattedDate } from '../../misc/dateFormatting'
import FoodScreen from '../FoodScreen/FoodScreen'
import MealModel from '../../models/MealModel'

function ViewMealScreen({
    route,
    navigation,
}: {
    route: RouteProp<any>
    navigation: NavigationProp<ParamListBase>
}) {
    // @ts-ignore
    const {
        currentMeal,
        selectedDate,
        currentDate,
    }: { currentMeal: MEAL_TYPES; selectedDate: string; currentDate: string } =
        route.params

    const dispatch = useDispatch()

    const focused = useIsFocused()

    const foodDiary = useSelector((state: RootState) => state.foodDiary)

    const { setTitle, setRightItem } = useContext(NavbarContext)
    const [meals, setMeals] = useState<MealModel>(foodDiary.meals)
    const [selectedFood, setSelectedFood] = useState<UserFoodModel>()

    const [isCurrent, setIsCurrent] = useState(false)

    const [editFoodVisible, setEditFoodVisible] = useState(false)
    const [foodDetailsVisible, setFoodDetailsVisible] = useState(false)

    useEffect(() => {
        if (selectedDate == currentDate) {
            setStoredMeals(foodDiary.meals).then((action) => {
                dispatch(action)
            })
        }

        getStoredMeals(getFormattedDate(new Date(selectedDate))).then(
            (meals) => {
                setMeals(meals)
                setSelectedFood(meals[currentMeal][0])
            }
        )
    }, [foodDiary.meals])

    useEffect(() => {
        setTitle(currentMeal)
        setRightItem(
            <Button
                size={'small'}
                onPress={() => {
                    navigation.navigate('Search', {
                        meal: currentMeal,
                    })
                }}
            >
                Add
            </Button>
        )

        if (currentMeal != selectedDate) {
            getStoredMeals(getFormattedDate(new Date(selectedDate))).then(
                (meals) => {
                    setMeals(meals)
                    setSelectedFood(meals[currentMeal][0])
                }
            )
        }
        setIsCurrent(currentDate == selectedDate)
    }, [])

    useEffect(() => {
        setTitle(currentMeal)
        setRightItem(
            <Button
                size={'small'}
                onPress={() => {
                    navigation.navigate('Search', {
                        meal: currentMeal,
                    })
                }}
            >
                Add
            </Button>
        )
    }, [focused])

    return (
        <Layout style={style.ViewMealScreen} level={'1'}>
            <SearchList
                data={meals[currentMeal]}
                renderItem={({ item }: { item: UserFoodModel }) => (
                    <SearchFoodItemDetailed
                        editable={isCurrent}
                        item={item}
                        onPress={() => {
                            setFoodDetailsVisible(true)
                        }}
                        onPressAdd={() => {
                            setSelectedFood(item)
                            setEditFoodVisible(true)
                        }}
                    />
                )}
                ListEmptyComponent={() => (
                    <Layout
                        level={'3'}
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text>Empty...</Text>
                    </Layout>
                )}
            />

            <FullScreenModal
                visible={editFoodVisible}
                onBackdropPress={() => setEditFoodVisible(false)}
            >
                <EditFoodScreen
                    meals={meals}
                    selectedMeal={currentMeal}
                    foodItem={selectedFood!}
                    onBack={() => {
                        setEditFoodVisible(false)
                    }}
                    afterSubmit={() => {
                        setEditFoodVisible(false)
                    }}
                />
            </FullScreenModal>
            <FullScreenModal
                visible={foodDetailsVisible}
                onBackdropPress={() => setFoodDetailsVisible(false)}
            >
                <FoodScreen
                    navigation={navigation}
                    foodItem={selectedFood?.food!}
                    onBack={() => {
                        setFoodDetailsVisible(false)
                    }}
                />
            </FullScreenModal>
        </Layout>
    )
}

export default ViewMealScreen
