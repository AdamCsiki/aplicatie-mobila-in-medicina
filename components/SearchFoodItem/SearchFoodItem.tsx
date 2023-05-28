import { Button, Layout, ListItem, Text, useTheme } from '@ui-kitten/components'
import style from './SearchFoodItem.Style'
import { Image, TouchableOpacity } from 'react-native'
import DividedBar from '../DividedBar/DividedBar'
import { API } from '../../api/axios'
import FoodModel from '../../models/FoodModel'
import { ListItemProps } from '@ui-kitten/components/ui/list/listItem.component'

function SearchFoodItem({
    item,
    reloadImage,
    onPress,
    onPressAdd = () => {},
}: {
    item: FoodModel
    reloadImage?: string
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
            <TouchableOpacity>
                <Image
                    source={{
                        uri: item.image_path
                            ? reloadImage
                                ? API +
                                  item.image_path +
                                  `?reload=${reloadImage}`
                                : API + item.image_path
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
                        divisions={[
                            item.proteins,
                            item.fats,
                            item.carbs,
                            item.empty_calories,
                        ]}
                    />
                </Layout>
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
