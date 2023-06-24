import { Button, Layout, Text } from '@ui-kitten/components'
import style from './SearchFoodScreen.style'
import SearchInput from '../../components/SearchInput/SearchInput'
import SearchList from '../../components/SearchList/SearchList'
import Spacer from '../../components/Spacer/Spacer'
import { useContext, useEffect, useState } from 'react'
import FoodModel from '../../models/FoodModel'
import SearchFoodItem from '../../components/SearchFoodItem/SearchFoodItem'
import FullScreenModal from '../../components/FullScreenModal/FullScreenModal'
import { getAllFoods, searchFoods } from '../../redux/actions/searchActions'
import AddFoodScreen from '../AddFoodScreen/AddFoodScreen'
import FoodScreen from '../FoodScreen/FoodScreen'
import { NavbarContext } from '../../context/NavbarContext'
import { RefreshControl } from 'react-native'

function SearchFoodScreen({ route, navigation }: any) {
    const { meal } = route.params

    const { setTitle, setRightItem } = useContext(NavbarContext)
    const [isRefreshing, setIsRefreshing] = useState(false)

    const [addFoodVisible, setAddFoodVisible] = useState(false)
    const [foodDetailsVisible, setFoodDetailsVisible] = useState(false)

    const [foodList, setFoodList] = useState<FoodModel[]>([])
    const [pickedFood, setPickedFood] = useState<FoodModel>()

    const [searchQuery, setSearchQuery] = useState<string>('')

    const onSearch = () => {
        setIsRefreshing(true)
        setFoodList([])
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
        setTitle(meal)
        setRightItem(
            <Button
                size={'small'}
                onPress={() => {
                    navigation.navigate('Create')
                }}
            >
                <Text>Create</Text>
            </Button>
        )

        getAllFoods()
            .then((foods) => {
                setFoodList(foods)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    return (
        <Layout style={style.DietAddScreen}>
            <Layout style={style.DietAddScreenSearchDiv}>
                <SearchInput
                    onChangeText={(text) => setSearchQuery(text)}
                    onSubmitEditing={(event) => {
                        setSearchQuery(event.nativeEvent.text)
                    }}
                />
                <Button
                    onPress={() =>
                        onSearch().finally(() => {
                            setIsRefreshing(false)
                        })
                    }
                >
                    <Text>Search</Text>
                </Button>
            </Layout>
            <Spacer />
            <Layout style={style.DietAddScreenListContainer}>
                <Layout style={style.DietAddScreenListHeader}>
                    <Button
                        onPress={() => {
                            onSearch().finally(() => {
                                setIsRefreshing(false)
                            })
                        }}
                    >
                        <Text>Refresh</Text>
                    </Button>
                </Layout>

                <Spacer />

                <SearchList
                    data={foodList}
                    refreshControl={
                        <RefreshControl
                            onRefresh={onSearch}
                            refreshing={isRefreshing}
                        />
                    }
                    renderItem={({ item }) => {
                        return (
                            <SearchFoodItem
                                item={item}
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
                    meal={meal}
                    foodItem={pickedFood!}
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
                    onAdd={() => {
                        setAddFoodVisible(true)
                    }}
                />
            </FullScreenModal>
        </Layout>
    )
}

export default SearchFoodScreen
