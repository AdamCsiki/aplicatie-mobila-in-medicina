import { Button, Layout, ListItem, Text, useTheme } from '@ui-kitten/components'
import Container from '../../components/Container/Container'
import style from './SearchScreen.style'
import SearchInput from '../../components/SearchInput/SearchInput'
import ScrollContainer from '../../components/SearchList/SearchList'
import Spacer from '../../components/Spacer/Spacer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from '../../api/axios'
import FoodModel from '../../models/FoodModel'
import SearchFoodItem from '../../components/SearchFoodItem/SearchFoodItem'
import { TouchableOpacity } from 'react-native'
import { RootState } from '../../redux/store'

function SearchScreen({ navigation }: { navigation: any }) {
    const theme = useTheme()
    const dispatch = useDispatch()
    const auth = useSelector((state: RootState) => state.auth)

    const [foodList, setFoodList] = useState<FoodModel[]>([])

    const [searchQuery, setSearchQuery] = useState<string>('')

    const getAllFoods = () => {
        return axios.get('/foods')
    }

    const getFoodsByQuery = (query: string) => {
        return axios.get('/foods/find', { params: { search: query } })
    }

    const getPersonalFoods = () => {
        return axios.get('/foods/uid', { params: { id: auth.user } })
    }

    const onRefresh = () => {
        if (!searchQuery.trim()) {
            return getAllFoods()
                .then((res) => setFoodList(res.data))
                .catch((err) => {
                    console.log(err.message)
                })
        }
        return getFoodsByQuery(searchQuery.trim())
            .then((res) => setFoodList(res.data))
            .catch((err) => {
                console.log(err.message)
            })
    }

    useEffect(() => {
        getAllFoods()
            .then((res) => {
                console.log(res.data)
                setFoodList(res.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    return (
        <Layout style={style.DietAddScreen} level="4">
            <Container style={style.DietAddScreenSearchContainer}>
                <Layout style={style.DietAddScreenSearchDiv}>
                    <SearchInput
                        onChangeText={(text) => setSearchQuery(text)}
                        onSubmitEditing={(event) => {
                            setSearchQuery(event.nativeEvent.text)
                        }}
                    />
                    <Button onPress={() => onRefresh()}>
                        <Text>Search</Text>
                    </Button>
                </Layout>
                <Layout style={style.DietAddScreenSearchDiv}>
                    <Button>
                        <Text category="h6">Tags</Text>
                    </Button>
                </Layout>
            </Container>
            <Spacer />
            <Container style={style.DietAddScreenListContainer}>
                <Layout style={style.DietAddScreenListHeader}>
                    <Text
                        category={'h6'}
                        style={{
                            color: theme['error-color-100'],
                        }}
                    >
                        Search
                    </Text>
                    <Button
                        size="small"
                        onPress={() => {
                            getPersonalFoods().then((res) => {
                                setFoodList(res.data)
                            })
                        }}
                    >
                        <Text category="h6">+</Text>
                    </Button>
                </Layout>

                <ScrollContainer
                    data={foodList}
                    nestedScrollEnabled={true}
                    renderItem={({ item }) => {
                        return (
                            <SearchFoodItem
                                item={item}
                                onPress={() => {
                                    navigation.navigate('Details', {
                                        item: item,
                                    })
                                }}
                            />
                        )
                    }}
                />
            </Container>
        </Layout>
    )
}

export default SearchScreen
