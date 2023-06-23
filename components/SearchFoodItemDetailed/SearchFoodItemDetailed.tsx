import { Layout, ListItem, Text, useTheme } from '@ui-kitten/components'
import style from './SearchFoodItemDetailed.Style'
import { TouchableOpacity } from 'react-native'
import Spacer from '../Spacer/Spacer'
import UserFoodModel from '../../models/UserFoodModel'

function SearchFoodItemDetailed({
    item,
    onPress,
    onPressAdd = () => {},
}: {
    item: UserFoodModel
    onPress: () => void
    onPressAdd?: () => void
}) {
    const theme = useTheme()

    return (
        <ListItem
            style={{
                ...style.SearchItem,
                backgroundColor: theme['background-basic-color-1'],
            }}
            onPress={() => onPress?.()}
        >
            <Layout style={style.SearchItemMainContainer}>
                <Text category="h6">
                    {item.food.name}
                    {item.food.producer ? ` - ${item.food.producer} ` : ' '}
                    <Text category={'c1'}>
                        {item.quantity} {item.quantityType}
                    </Text>
                </Text>
                <Spacer height={4} />
                <Text category={'c1'}>Kcal: {item.food.calories}</Text>
            </Layout>
            <Layout style={style.ButtonContainer}>
                <TouchableOpacity
                    style={{
                        ...style.Button,
                        backgroundColor: theme['background-basic-color-2'],
                    }}
                    onPress={onPressAdd}
                >
                    <Text category={'c1'}>Edit</Text>
                </TouchableOpacity>
            </Layout>
        </ListItem>
    )
}

export default SearchFoodItemDetailed
