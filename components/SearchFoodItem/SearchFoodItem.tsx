import { Layout, ListItem, Text, useTheme } from '@ui-kitten/components'
import style from './SearchFoodItem.Style'
import { TouchableOpacity } from 'react-native'
import FoodModel from '../../models/FoodModel'
import Spacer from '../Spacer/Spacer'

function SearchFoodItem({
    item,
    onPress,
    onPressAdd = () => {},
}: {
    item: FoodModel
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
                    {item.name}
                    {item.producer ? ` - ${item.producer}` : ''}
                </Text>
                <Spacer height={8} />
                <Text category={'c1'}>Kcal: {item.calories}</Text>
            </Layout>
            <Layout style={style.ButtonContainer}>
                <TouchableOpacity
                    style={{
                        ...style.Button,
                        backgroundColor: theme['background-basic-color-2'],
                    }}
                    onPress={onPressAdd}
                >
                    <Text category={'h5'}>+</Text>
                </TouchableOpacity>
            </Layout>
        </ListItem>
    )
}

export default SearchFoodItem
