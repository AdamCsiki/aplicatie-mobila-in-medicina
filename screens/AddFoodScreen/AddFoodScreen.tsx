import { Button, Input, Layout, Text } from '@ui-kitten/components'
import { ScrollView } from 'react-native-virtualized-view'
import gstyle from '../../styles/global-style'
import FoodModel from '../../models/FoodModel'
import Spacer from '../../components/Spacer/Spacer'
import Select from '../../components/Select/Select'
import { useEffect, useState } from 'react'
import { MEAL_TYPES } from '../../redux/types/types'
import { addFood } from '../../redux/actions/foodActions'
import { useDispatch } from 'react-redux'
import {
    UnitOfMeasurement,
    unitOfMeasurementArray,
} from '../../models/MeasurmentModel'
import Table from '../../components/Table/Table'
import * as math from 'mathjs'
import { convertQuantity } from '../../misc/generateUnits'

function AddFoodScreen({
    meal,
    foodItem,
    navigation,
    onBack,
    afterSubmit,
}: {
    meal: MEAL_TYPES
    foodItem: FoodModel
    navigation?: any
    onBack?: () => void
    afterSubmit?: () => void
}) {
    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState<number>(100)
    const [baseQuantity, setBaseQuantity] = useState<number>(100)
    const [quantityType, setQuantityType] = useState<UnitOfMeasurement>('gram')

    const onSubmit = () => {
        dispatch(addFood(meal, foodItem, quantity, baseQuantity, quantityType))
        afterSubmit?.()
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
                    <Text category={'h5'}>Add Food</Text>
                    <Text>{foodItem?.name}</Text>
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
                            ((foodItem.calories * baseQuantity) / 100).toFixed(
                                2
                            ),
                            (
                                (foodItem.empty_calories * baseQuantity) /
                                100
                            ).toFixed(2),
                            ((foodItem.carbs * baseQuantity) / 100).toFixed(2),
                            ((foodItem.fats * baseQuantity) / 100).toFixed(2),
                            ((foodItem.proteins * baseQuantity) / 100).toFixed(
                                2
                            ),
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
                    <Button onPress={onSubmit}>
                        <Text>Add</Text>
                    </Button>
                </Layout>
            </ScrollView>
        </Layout>
    )
}

export default AddFoodScreen
