import { Layout, ListItem, Text, useTheme } from '@ui-kitten/components'
import style from './AddItem.style'
import { TouchableOpacity } from 'react-native'

function AddItem({ onPress }: { onPress: () => void }) {
    const theme = useTheme()
    return (
        <ListItem onPress={onPress} style={style.AddItem}>
            <TouchableOpacity onPress={onPress}>
                <Layout
                    style={{
                        ...style.Plus,
                        backgroundColor: theme['color-primary-500'],
                    }}
                >
                    <Text
                        category={'h4'}
                        style={{
                            marginTop: -4,
                            color: theme['text-basic-color'],
                        }}
                    >
                        +
                    </Text>
                </Layout>
            </TouchableOpacity>
        </ListItem>
    )
}

export default AddItem
