import { Button, Layout, Text } from '@ui-kitten/components'
import FoodModel from '../../models/FoodModel'
import style from './FoodScreen.style'
import gstyle from '../../styles/global-style'
import { Image } from 'react-native'
import Spacer from '../../components/Spacer/Spacer'
import { useEffect } from 'react'
import { API } from '../../api/axios'
import Table from '../../components/Table/Table'

function FoodScreen({
    navigation,
    onBack,
    afterSubmit,
    foodItem,
    onAdd,
}: {
    navigation?: any
    onBack?: () => void
    afterSubmit?: () => void
    foodItem: FoodModel
    onAdd?: () => void
}) {
    useEffect(() => {
        console.log(foodItem)
    }, [])
    return (
        <Layout style={style.DetailsScreen}>
            <Layout style={gstyle.Container}>
                <Layout style={gstyle.SpaceBetween}>
                    <Text category={'h5'}>{foodItem.name}</Text>
                    <Button size={'small'} onPress={onBack}>
                        x
                    </Button>
                </Layout>
                <Spacer height={32} />
                <Layout
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <Image
                        source={{ uri: API + foodItem.image_path }}
                        style={style.Image}
                    />
                </Layout>
                <Spacer height={32} />
                <Layout>
                    <Table
                        labels={[
                            'Quantity',
                            'Kilocalories',
                            'Empty calories',
                            'Carbohydrates',
                            'Fats',
                            'Proteins',
                        ]}
                        data={[
                            `${100}g`,
                            foodItem.calories,
                            foodItem.empty_calories,
                            foodItem.carbs,
                            foodItem.fats,
                            foodItem.proteins,
                        ]}
                    />
                </Layout>
            </Layout>
            <Button
                onPress={() => {
                    onAdd?.()
                }}
            >
                Add
            </Button>
        </Layout>
    )
}

export default FoodScreen
