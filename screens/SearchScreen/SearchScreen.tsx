import { Button, Layout, ListItem, Text, useTheme } from '@ui-kitten/components'
import Container from '../../components/Container/Container'
import style from './SearchScreen.style'
import SearchInput from '../../components/SearchInput/SearchInput'
import ScrollContainer from '../../components/SearchList/SearchList'
import Spacer from '../../components/Spacer/Spacer'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from '../../api/axios'
import FoodModel from '../../models/FoodModel'
import SearchFoodItem from '../../components/SearchFoodItem/SearchFoodItem'

function SearchScreen({ navigation }: { navigation: any }) {
    const theme = useTheme()
    const dispatch = useDispatch()

    const [foodList, setFoodList] = useState<FoodModel[]>([])

    const [searchQuery, setSearchQuery] = useState<string>('')

    const getAllFoods = () => {
        return axios.get('/foods')
    }

    const getFoodsByQuery = (query: string) => {
        return axios.get('/foods/find', { params: { search: query } })
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
                <Text
                    style={{
                        textAlign: 'center',
                        width: '100%',
                        color: theme['error-color-100'],
                    }}
                >
                    Search
                </Text>
                <ScrollContainer
                    data={foodList}
                    nestedScrollEnabled={true}
                    itemOnPress={(item) => {
                        navigation.navigate('Details', { item: item })
                    }}
                    renderItem={({ item }) => {
                        return <SearchFoodItem item={item} />
                    }}
                />
            </Container>
        </Layout>
    )
}

export default SearchScreen
