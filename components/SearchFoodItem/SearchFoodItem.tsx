import { Layout, ListItem, Text, useTheme } from '@ui-kitten/components'
import style from './SearchFoodItem.Style'
import { Image } from 'react-native'
import { useEffect } from 'react'
import DividedBar from '../DividedBar/DividedBar'
import { API } from '../../api/axios'
import FoodModel from '../../models/FoodModel'

function SearchFoodItem({
    item,
    onPress,
}: {
    item: FoodModel
    onPress?: () => void
}) {
    const theme = useTheme()

    return (
        <ListItem
            style={{
                ...style.SearchItem,
                backgroundColor: theme['color-basic-100'],
            }}
            onPress={onPress}
        >
            <Image
                source={{
                    uri: item.image_path ? API + item.image_path : undefined,
                }}
                style={style.SearchItemImage}
            />
            <Layout style={style.SearchItemMainContainer}>
                <Layout style={style.SearchItemHeader}>
                    <Text category="h6">{item.name}</Text>
                    <Text>Cals: {item.calories}</Text>
                </Layout>
                <Layout style={style.SearchItemDetails}>
                    <Text category="c1">Proteins / Fats / Carbs </Text>
                    <DividedBar
                        divisions={[item.proteins, item.fats, item.carbs]}
                    />
                </Layout>
            </Layout>
        </ListItem>
    )
}

export default SearchFoodItem
