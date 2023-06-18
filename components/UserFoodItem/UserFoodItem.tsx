import { Layout, Text, useTheme } from '@ui-kitten/components'
import style from './UserFoodItem.Style'
import FoodModel from '../../models/FoodModel'
import { ListItemProps } from '@ui-kitten/components/ui/list/listItem.component'

interface CustomListItemProps extends ListItemProps {
    quantity: number
    baseQuantity: number
    quantityType: string
    item: FoodModel
    onPress: () => void
    onPressRemove?: () => void
}

function UserFoodItem(props: CustomListItemProps) {
    const theme = useTheme()

    return (
        <Layout style={style.UserFoodItem}>
            <Layout style={style.FoodItemHeader}>
                <Text category="p1">{props.item.name}</Text>
                <Text category="c1">
                    {props.quantity} {props.quantityType} /{' '}
                    {((props.item.calories * props.baseQuantity) / 100).toFixed(
                        2
                    )}{' '}
                    Kcal
                </Text>
            </Layout>
        </Layout>
    )
}

export default UserFoodItem
