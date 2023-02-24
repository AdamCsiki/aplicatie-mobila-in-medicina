import { Layout } from '@ui-kitten/components'
import ScrollContainer from '../../components/SearchList/SearchList'
import { Text } from 'react-native'

function DetailsScreen({ navigation, route }: { navigation: any; route: any }) {
    const { item } = route.params

    return (
        <Layout>
            <Text>{JSON.stringify(item)}</Text>
        </Layout>
    )
}

export default DetailsScreen
