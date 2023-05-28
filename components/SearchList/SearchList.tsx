import { List, ListProps, useTheme } from '@ui-kitten/components'
import style from './SearchList.style'
import Spacer from '../Spacer/Spacer'

function SearchList(props: ListProps) {
    const theme = useTheme()

    return (
        <List
            {...props}
            scrollEnabled
            showsVerticalScrollIndicator
            style={{
                ...style.List,
                backgroundColor: theme['background-basic-color-3'],
            }}
            contentContainerStyle={style.ContentContainer}
            ItemSeparatorComponent={() => <Spacer height={8} />}
        />
    )
}

export default SearchList
