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
import {
    addOneFoodToStorage,
    removeOneFoodFromStorage,
} from '../../redux/actions/dietActions'
import FullScreenModal from '../../components/FullScreenModal/FullScreenModal'
import FoodService from '../../services/FoodService'
import { getAllFoods, searchFoods } from '../../redux/actions/searchActions'
import CreateFoodScreen from '../CreateFoodScreen/CreateFoodScreen'

function SearchFoodScreen({ navigation }: { navigation: any }) {
    const theme = useTheme()
    const dispatch = useDispatch()
    const auth = useSelector((state: RootState) => state.auth)

    let dateTimestamp = new Date().toDateString()

    const [createFoodVisible, setCreateFoodVisible] = useState(false)

    const [foodList, setFoodList] = useState<FoodModel[]>([])

    const [searchQuery, setSearchQuery] = useState<string>('')

    const getPersonalFoods = () => {
        return axios.get('/foods/uid', { params: { id: auth.user } })
    }

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
            .then((res) => {
                setFoodList(res.data)
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
                            setCreateFoodVisible(true)
                        }}
                    >
                        <Text category="h6">Create</Text>
                    </Button>
                </Layout>
            </Layout>
            <Spacer />
            <Layout style={style.DietAddScreenListContainer}>
                <Layout style={style.DietAddScreenListHeader}>
                    <Text
                        category={'h6'}
                        style={{
                            color: theme['error-color-100'],
                        }}
                    >
                        Search
                    </Text>
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
                                    navigation.navigate('Details', {
                                        item: item,
                                    })
                                }}
                                onPressAdd={() => {
                                    addOneFoodToStorage(item)
                                }}
                                onPressRemove={() => {
                                    removeOneFoodFromStorage(item)
                                }}
                            />
                        )
                    }}
                />
            </Layout>
            <FullScreenModal
                visible={createFoodVisible}
                onBackdropPress={() => setCreateFoodVisible(false)}
            >
                <CreateFoodScreen
                    onBack={() => setCreateFoodVisible(false)}
                    afterSubmit={() => {
                        setCreateFoodVisible(false)
                    }}
                />
            </FullScreenModal>
        </Layout>
    )
}

export default SearchFoodScreen
