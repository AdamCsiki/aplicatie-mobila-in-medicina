import { Button, Input, Layout, Text } from '@ui-kitten/components'
import style from './CreateFoodScreen.style'
import SearchList from '../../components/SearchList/SearchList'
import SearchFoodItem from '../../components/SearchFoodItem/SearchFoodItem'
import Spacer from '../../components/Spacer/Spacer'
import { ScrollView } from 'react-native-virtualized-view'

function CreateFoodScreen({
    navigation,
    onBack,
    afterSubmit,
}: {
    navigation?: any
    onBack?: () => void
    afterSubmit?: () => void
}) {
    return (
        <Layout style={style.CreateFoodScreen}>
            <ScrollView style={style.ScrollContainer}>
                <Layout
                    style={{
                        ...style.Header,
                        justifyContent: 'space-between',
                    }}
                >
                    <Text category={'h5'}>Create</Text>
                </Layout>
                <Spacer />
                <Layout style={style.Container}>
                    <Text>Name</Text>
                    <Spacer />
                    <Input placeholder={'Name'} />
                    <Spacer />
                    <Text>Description</Text>
                    <Spacer />
                    <Input placeholder={'Description'} />
                </Layout>
                <Spacer />
                <Layout style={style.IngredientsContainer}>
                    <Layout style={style.Header}>
                        <Text>Ingredients</Text>
                    </Layout>
                    <Spacer />
                    <Layout style={style.Header}>
                        <Input style={{ width: '60%' }} />
                        <Button>Search</Button>
                    </Layout>
                    <Spacer />
                    <SearchList
                        data={[]}
                        renderItem={({ item }) => {
                            return (
                                <SearchFoodItem
                                    item={item}
                                    onPress={() => {}}
                                />
                            )
                        }}
                    />
                </Layout>
                <Spacer height={64} />
                <Layout style={style.Header}>
                    <Button
                        onPress={() => {
                            onBack?.()
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onPress={() => {
                            afterSubmit?.()
                        }}
                    >
                        Done
                    </Button>
                </Layout>
            </ScrollView>
        </Layout>
    )
}

export default CreateFoodScreen
