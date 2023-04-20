import { Button, Input, Layout, Text } from '@ui-kitten/components'
import style from './CreateFoodScreen.style'
import SearchList from '../../components/SearchList/SearchList'
import SearchFoodItem from '../../components/SearchFoodItem/SearchFoodItem'
import Spacer from '../../components/Spacer/Spacer'

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
            <Layout style={{ ...style.Heading, justifyContent: 'flex-end' }}>
                <Button
                    onPress={() => {
                        onBack?.()
                    }}
                >
                    x
                </Button>
            </Layout>
            <Layout style={style.Container}>
                <Text>Name</Text>
                <Input placeholder={'Name'} />
                <Spacer />
                <Text>Description</Text>
                <Input placeholder={'Description'} />
            </Layout>
            <Spacer />
            <Layout style={{ minHeight: 150 }}>
                <Layout style={style.Heading}>
                    <Text>Ingredients</Text>
                    <Button size={'small'}>Add</Button>
                </Layout>
                <Spacer />
                <Layout style={style.Heading}>
                    <Input style={{ flex: 1 }} />
                    <Button>Search</Button>
                </Layout>
                <Spacer />
                <SearchList
                    data={[]}
                    renderItem={({ item }) => {
                        return <SearchFoodItem item={item} onPress={() => {}} />
                    }}
                />
            </Layout>
            <Spacer height={64} />
            <Layout style={style.Heading}>
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
        </Layout>
    )
}

export default CreateFoodScreen
