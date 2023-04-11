import { List, ListProps, useTheme } from '@ui-kitten/components'
import style from './SearchList.style'
import Spacer from '../Spacer/Spacer'

function SearchList(props: ListProps) {
    const theme = useTheme()

    return (
        <List
            {...props}
            style={{ ...style.List, backgroundColor: theme['color-basic-300'] }}
            contentContainerStyle={style.ContentContainer}
            ItemSeparatorComponent={() => <Spacer height={8} />}
        />
    )
}

export default SearchList
