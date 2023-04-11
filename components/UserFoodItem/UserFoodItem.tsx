import { Layout, ListItem, Text, useTheme } from '@ui-kitten/components'
import style from './UserFoodItem.Style'
import { Image, TouchableOpacity } from 'react-native'
import DividedBar from '../DividedBar/DividedBar'
import { API } from '../../api/axios'
import FoodModel from '../../models/FoodModel'
import { ListItemProps } from '@ui-kitten/components/ui/list/listItem.component'

function UserFoodItem({
    quantity,
    item,
    onPress,
    onPressAdd = () => {},
    onPressRemove = () => {},
    ListItemProps,
}: {
    quantity: number
    item: FoodModel
    onPress: () => void
    onPressAdd?: () => void
    onPressRemove?: () => void
    ListItemProps?: ListItemProps
}) {
    const theme = useTheme()

    return (
        <ListItem
            {...ListItemProps}
            style={{
                ...style.UserFoodItem,
                backgroundColor: theme['color-basic-100'],
            }}
            onPress={() => onPress?.()}
        >
            <Layout style={style.ButtonContainer}>
                <TouchableOpacity onPress={onPressAdd} style={style.Button}>
                    <Text category={'label'}>+</Text>
                </TouchableOpacity>
                <Text>{quantity}</Text>
                <TouchableOpacity onPress={onPressRemove} style={style.Button}>
                    <Text category={'label'}>-</Text>
                </TouchableOpacity>
            </Layout>
            <TouchableOpacity style={style.FoodImageContainer}>
                <Image
                    source={{
                        uri: item.image_path
                            ? API + item.image_path
                            : API + '/images/foods/default.png',
                    }}
                    style={style.FoodItemImage}
                />
            </TouchableOpacity>

            <Layout style={style.FoodItemMainContainer}>
                <Layout style={style.FoodItemHeader}>
                    <Text category="h6">{item.name}</Text>
                </Layout>
                <Text>Cals: {item.calories}</Text>
                <Layout style={style.FoodItemDetails}>
                    <DividedBar
                        divisions={[item.proteins, item.fats, item.carbs]}
                    />
                </Layout>
            </Layout>
        </ListItem>
    )
}

export default UserFoodItem
