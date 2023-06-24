import { Button, Input, Layout, Text } from '@ui-kitten/components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import gstyle from '../../styles/global-style'
import { ScrollView } from 'react-native-virtualized-view'
import Spacer from '../../components/Spacer/Spacer'
import Select from '../../components/Select/Select'
import {
    UnitOfMeasurement,
    unitOfMeasurementArray,
} from '../../models/MeasurmentModel'
import Table from '../../components/Table/Table'
import { useEffect, useState } from 'react'
import UserFoodModel from '../../models/UserFoodModel'
import * as math from 'mathjs'
import { convertQuantity } from '../../misc/generateUnits'
import MealModel from '../../models/MealModel'
import { MEAL_TYPES } from '../../redux/types/types'
import { setStoredMeals } from '../../redux/actions/foodActions'

function EditFoodScreen({
    meals,
    selectedMeal,
    foodItem,
    onBack,
    afterSubmit,
}: {
    meals: MealModel
    selectedMeal: MEAL_TYPES
    foodItem: UserFoodModel
    onBack?: () => void
    afterSubmit?: () => void
}) {
    const dispatch = useDispatch()

    const foodDiary = useSelector((state: RootState) => state.foodDiary)

    const [quantity, setQuantity] = useState<number>(foodItem.quantity)
    const [baseQuantity, setBaseQuantity] = useState<number>(
        foodItem.baseQuantity
    )
    const [quantityType, setQuantityType] = useState<UnitOfMeasurement>(
        foodItem.quantityType
    )

    const onSubmit = (removed = false) => {
        let editedMeals = meals

        if (removed) {
            const objIndex = editedMeals[selectedMeal].findIndex(
                (obj) => obj.food.id === foodItem.food.id
            )

            editedMeals[selectedMeal].splice(objIndex, 1)
        } else {
            editedMeals[selectedMeal] = editedMeals[selectedMeal].map(
                (food) => {
                    if (food.food.id === foodItem.food.id) {
                        return { ...food, quantityType, quantity, baseQuantity }
                    }
                    return food
                }
            )
        }

        setStoredMeals(editedMeals)
            .then((action) => {
                dispatch(action)
            })
            .finally(() => {
                afterSubmit?.()
            })
    }

    useEffect(() => {
        if (quantityType && quantity) {
            setBaseQuantity(
                math.number(convertQuantity(quantity, quantityType))
            )
        }
    }, [quantity, quantityType])

    return (
        <Layout style={gstyle.ScrollContainerParent}>
            <ScrollView style={gstyle.ScrollContainer}>
                <Layout style={gstyle.SpaceBetween}>
                    <Text category={'h5'}>Edit Food</Text>
                    <Text>{foodItem?.food.name}</Text>
                </Layout>
                <Spacer height={32} />
                <Layout style={gstyle.SpaceBetween}>
                    <Input
                        size={'large'}
                        placeholder={'Quantity'}
                        style={{ flexGrow: 1 }}
                        keyboardType={'number-pad'}
                        defaultValue={quantity.toString()}
                        onEndEditing={(e) => {
                            if (!e.nativeEvent.text) {
                                setQuantity(0.0)
                                return
                            }

                            setQuantity(Number.parseFloat(e.nativeEvent.text))
                        }}
                    />
                    <Select
                        data={unitOfMeasurementArray}
                        defaultValue={quantityType}
                        onSelect={(selectedItem) => {
                            setQuantityType(selectedItem)
                        }}
                    />
                </Layout>

                <Spacer height={32} />

                <Layout>
                    <Table
                        labels={[
                            'Kilocalories',
                            'Empty Calories',
                            'Carbohydrates',
                            'Fats',
                            'Protein',
                        ]}
                        data={[
                            (
                                (foodItem.food.calories * baseQuantity) /
                                100
                            ).toFixed(2),
                            (
                                (foodItem.food.empty_calories * baseQuantity) /
                                100
                            ).toFixed(2),
                            (
                                (foodItem.food.carbs * baseQuantity) /
                                100
                            ).toFixed(2),
                            ((foodItem.food.fats * baseQuantity) / 100).toFixed(
                                2
                            ),
                            (
                                (foodItem.food.proteins * baseQuantity) /
                                100
                            ).toFixed(2),
                        ]}
                    />
                </Layout>

                <Spacer height={32} />

                <Layout style={gstyle.SpaceBetween}>
                    <Button
                        onPress={() => {
                            onBack?.()
                        }}
                    >
                        <Text>Cancel</Text>
                    </Button>
                    <Button
                        onPress={() => {
                            onSubmit(true)
                        }}
                    >
                        <Text>Remove</Text>
                    </Button>
                    <Button
                        onPress={() => {
                            onSubmit()
                        }}
                    >
                        <Text>Save</Text>
                    </Button>
                </Layout>
            </ScrollView>
        </Layout>
    )
}

export default EditFoodScreen
