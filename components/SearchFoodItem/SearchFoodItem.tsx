import { Button, Layout, ListItem, Text, useTheme } from '@ui-kitten/components'
import style from './SearchFoodItem.Style'
import { Image, TouchableOpacity } from 'react-native'
import DividedBar from '../DividedBar/DividedBar'
import { API } from '../../api/axios'
import FoodModel from '../../models/FoodModel'
import { ListItemProps } from '@ui-kitten/components/ui/list/listItem.component'

function SearchFoodItem({
    item,
    onPress,
    onPressAdd = () => {},
    onPressRemove = () => {},
}: {
    item: FoodModel
    onPress: () => void
    onPressAdd?: () => void
    onPressRemove?: () => void
}) {
    const theme = useTheme()

    return (
        <ListItem
            style={{
                ...style.SearchItem,
                backgroundColor: theme['color-basic-100'],
            }}
            onPress={() => onPress?.()}
        >
            <TouchableOpacity>
                <Image
                    source={{
                        uri: item.image_path
                            ? API + item.image_path + `?timestamp=${new Date()}`
                            : API + '/images/foods/default.png',
                    }}
                    style={style.SearchItemImage}
                />
            </TouchableOpacity>

            <Layout style={style.SearchItemMainContainer}>
                <Layout style={style.SearchItemHeader}>
                    <Text category="h6">{item.name}</Text>
                </Layout>
                <Text>Cals: {item.calories}</Text>
                <Layout style={style.SearchItemDetails}>
                    {/*<Text category="c1">*/}
                    {/*    {item.proteins}g P | {item.fats}g F | {item.carbs}g C*/}
                    {/*</Text>*/}

                    <DividedBar
                        divisions={[item.proteins, item.fats, item.carbs]}
                    />
                </Layout>
            </Layout>
            <Layout style={style.ButtonContainer}>
                <Button
                    size={'small'}
                    style={{
                        backgroundColor: theme['color-success-600'],
                        ...style.Button,
                        ...style.AddButton,
                    }}
                    onPress={onPressAdd}
                >
                    <Text category={'h5'}>+</Text>
                </Button>
                <Button
                    size={'small'}
                    style={{
                        backgroundColor: theme['color-danger-600'],
                        ...style.Button,
                        ...style.RemoveButton,
                    }}
                    onPress={onPressRemove}
                >
                    <Text category={'h5'}>-</Text>
                </Button>
            </Layout>
        </ListItem>
    )
}

export default SearchFoodItem
