import { Layout, ListItem, Text } from '@ui-kitten/components'
import style from './SearchItem.Style'
import { ItemModel } from '../../models/ItemModel'

function SearchItem({
    item,
    onPress,
}: {
    item: ItemModel
    onPress?: (item: any) => void
}) {
    return (
        <ListItem style={style.SearchItem} onPress={onPress}>
            <Layout>
                <Text>{item.name}</Text>
            </Layout>
        </ListItem>
    )
}

export default SearchItem
