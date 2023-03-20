import { Layout, ListItem, Text, useTheme } from '@ui-kitten/components'
import style from './SearchFoodItem.Style'
import { Image, TouchableOpacity } from 'react-native'
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
            onPress={() => {
                onPress?.()
            }}
        >
            <TouchableOpacity>
                <Image
                    source={{
                        uri: item.image_path
                            ? API + item.image_path
                            : API + '/images/foods/default.png',
                    }}
                    style={style.SearchItemImage}
                />
            </TouchableOpacity>

            <Layout style={style.SearchItemMainContainer}>
                <Layout style={style.SearchItemHeader}>
                    <Text category="h6">{item.name}</Text>
                    <Text>Cals: {item.calories}</Text>
                </Layout>
                <Layout style={style.SearchItemDetails}>
                    <Text category="c1">
                        {item.proteins}g P | {item.fats}g F | {item.carbs}g C
                    </Text>
                    <DividedBar
                        divisions={[item.proteins, item.fats, item.carbs]}
                    />
                </Layout>
            </Layout>
        </ListItem>
    )
}

export default SearchFoodItem
