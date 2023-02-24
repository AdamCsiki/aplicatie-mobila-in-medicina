import { Button, Layout, Text } from '@ui-kitten/components'
import Container from '../../components/Container/Container'
import style from './SearchScreen.style'
import SearchInput from '../../components/SearchInput/SearchInput'
import ScrollContainer from '../../components/SearchList/SearchList'
import Spacer from '../../components/Spacer/Spacer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect, useState } from 'react'
import { getAllFoods, searchFoods } from '../../redux/actions/searchActions'

function SearchScreen({ navigation }: { navigation: any }) {
    const dispatch = useDispatch()
    const food = useSelector<RootState>((state) => state.food)

    const [foodList, setFoodList] = useState([{ name: 'dick' }])

    const [searchQuery, setSearchQuery] = useState<string>('')

    const refresh = () => {
        searchFoods(searchQuery).then((res) => {
            if (res.error) {
                console.log(res.error)
                return
            }
            if (res.payload.list) {
                setFoodList(res.payload.list)
            }
            dispatch(res)
        })
    }

    return (
        <Layout style={style.DietAddScreen} level="4">
            <Container style={style.DietAddScreenSearchContainer}>
                <SearchInput onChangeText={(text) => setSearchQuery(text)} />
                <Text category="h6">Tags</Text>
                <Button onPress={refresh}>
                    <Text>Refresh</Text>
                </Button>
            </Container>
            <Spacer />
            <Container style={style.DietAddScreenListContainer}>
                <ScrollContainer
                    data={foodList}
                    nestedScrollEnabled={true}
                    itemOnPress={(item) => {
                        navigation.navigate('Details')
                    }}
                />
            </Container>
        </Layout>
    )
}

export default SearchScreen
