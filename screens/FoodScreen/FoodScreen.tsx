import { Button, Layout, Text } from '@ui-kitten/components'
import FoodModel from '../../models/FoodModel'
import style from './FoodScreen.style'
import gstyle from '../../styles/global-style'
import { Image } from 'react-native'
import Spacer from '../../components/Spacer/Spacer'
import HeadingAndContent from '../../components/HeadingAndContent/HeadingAndContent'
import { useEffect } from 'react'
import { API } from '../../api/axios'

function FoodScreen({
    navigation,
    onBack,
    afterSubmit,
    foodItem,
}: {
    navigation?: any
    onBack?: () => void
    afterSubmit?: () => void
    foodItem: FoodModel
}) {
    useEffect(() => {
        console.log(foodItem)
    }, [])
    return (
        <Layout style={style.DetailsScreen}>
            <Layout style={gstyle.Container}>
                <Layout style={gstyle.Header}>
                    <Text>{foodItem.name}</Text>
                    <Button size={'small'} onPress={onBack}>
                        x
                    </Button>
                </Layout>
                <Spacer />
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
                <Spacer />
                <Layout>
                    <HeadingAndContent
                        title={'Cals'}
                        content={foodItem.calories}
                    />
                    <Spacer />
                    <HeadingAndContent
                        title={'Carbs'}
                        content={foodItem.carbs}
                    />
                    <Spacer />
                    <HeadingAndContent
                        title={'Fats '}
                        content={foodItem.fats}
                    />
                    <Spacer />
                    <HeadingAndContent
                        title={'Proteins'}
                        content={foodItem.proteins}
                    />
                </Layout>
            </Layout>
        </Layout>
    )
}

export default FoodScreen
