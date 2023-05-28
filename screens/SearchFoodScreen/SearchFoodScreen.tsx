import { Button, Layout, ListItem, Text, useTheme } from '@ui-kitten/components'
import style from './SearchFoodScreen.style'
import SearchInput from '../../components/SearchInput/SearchInput'
import SearchList from '../../components/SearchList/SearchList'
import Spacer from '../../components/Spacer/Spacer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from '../../api/axios'
import FoodModel from '../../models/FoodModel'
import SearchFoodItem from '../../components/SearchFoodItem/SearchFoodItem'
import { RootState } from '../../redux/store'
import FullScreenModal from '../../components/FullScreenModal/FullScreenModal'
import { getAllFoods, searchFoods } from '../../redux/actions/searchActions'
import AddFoodScreen from '../AddFoodScreen/AddFoodScreen'
import FoodScreen from '../FoodScreen/FoodScreen'

function SearchFoodScreen({ navigation }: { navigation: any }) {
    const theme = useTheme()
    const dispatch = useDispatch()
    const auth = useSelector((state: RootState) => state.auth)

    let dateTimestamp = new Date().toDateString()

    const [addFoodVisible, setAddFoodVisible] = useState(false)
    const [foodDetailsVisible, setFoodDetailsVisible] = useState(false)

    const [foodList, setFoodList] = useState<FoodModel[]>([])
    const [pickedFood, setPickedFood] = useState<FoodModel>()

    const [searchQuery, setSearchQuery] = useState<string>('')

    const onSearch = () => {
        if (!searchQuery.trim()) {
            return getAllFoods()
                .then((res) => setFoodList(res))
                .catch((err) => {
                    console.log(err.message)
                })
        }
        return searchFoods(searchQuery.trim())
            .then((res) => setFoodList(res))
            .catch((err) => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        getAllFoods()
            .then((foods) => {
                setFoodList(foods)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    return (
        <Layout style={style.DietAddScreen} level="4">
            <Layout style={style.DietAddScreenSearchContainer}>
                <Layout style={style.DietAddScreenSearchDiv}>
                    <SearchInput
                        onChangeText={(text) => setSearchQuery(text)}
                        onSubmitEditing={(event) => {
                            setSearchQuery(event.nativeEvent.text)
                        }}
                    />
                    <Button onPress={() => onSearch()}>
                        <Text>Search</Text>
                    </Button>
                </Layout>
                <Layout style={style.DietAddScreenSearchDiv}>
                    <Button
                        onPress={() => {
                            navigation.navigate('Create')
                        }}
                    >
                        <Text category="h6">Create</Text>
                    </Button>
                </Layout>
            </Layout>
            <Spacer />
            <Layout style={style.DietAddScreenListContainer}>
                <Layout style={style.DietAddScreenListHeader}>
                    <Text category={'h6'}>Search</Text>
                    <Button size="small" onPress={() => {}}>
                        <Text category="h6">+</Text>
                    </Button>
                </Layout>

                <SearchList
                    data={foodList}
                    renderItem={({ item }) => {
                        return (
                            <SearchFoodItem
                                item={item}
                                reloadImage={dateTimestamp}
                                onPress={() => {
                                    setPickedFood(item)
                                    setFoodDetailsVisible(true)
                                }}
                                onPressAdd={() => {
                                    setPickedFood(item)
                                    setAddFoodVisible(true)
                                }}
                            />
                        )
                    }}
                />
            </Layout>
            <FullScreenModal
                visible={addFoodVisible}
                onBackdropPress={() => setAddFoodVisible(false)}
            >
                <AddFoodScreen
                    foodItem={pickedFood}
                    navigation={navigation}
                    onBack={() => setAddFoodVisible(false)}
                    afterSubmit={() => setAddFoodVisible(false)}
                />
            </FullScreenModal>
            <FullScreenModal
                visible={foodDetailsVisible}
                onBackdropPress={() => setFoodDetailsVisible(false)}
            >
                <FoodScreen
                    navigation={navigation}
                    foodItem={pickedFood!}
                    onBack={() => {
                        setFoodDetailsVisible(false)
                    }}
                />
            </FullScreenModal>
        </Layout>
    )
}

export default SearchFoodScreen
