import { Layout, List, ListItem, Text, useTheme } from '@ui-kitten/components'
import style from './SearchList.style'
import Spacer from '../Spacer/Spacer'
import React from 'react'
import { SafeAreaView } from 'react-native'
import SearchItem from '../SearchItem/SearchItem'

function ScrollContainer({
    data,
    itemOnPress,
    scrollEnabled = true,
    nestedScrollEnabled = true,
    onResponderMove,
    onResponderEnd,
    onTouchStart,
    onTouchEnd,
    onScrollBeginDrag,
    onScrollEndDrag,
}: {
    data?: any[]
    itemOnPress?: (item: any) => void
    scrollEnabled?: boolean
    nestedScrollEnabled?: boolean
    onResponderMove?: () => void
    onResponderEnd?: () => void
    onTouchStart?: () => void
    onTouchEnd?: () => void
    onScrollBeginDrag?: () => void
    onScrollEndDrag?: () => void
}) {
    const theme = useTheme()

    return (
        <List
            style={style.List}
            contentContainerStyle={style.ContentContainer}
            data={data}
            ItemSeparatorComponent={() => {
                return <Spacer height={8} />
            }}
            scrollEnabled={scrollEnabled}
            nestedScrollEnabled={nestedScrollEnabled}
            onResponderMove={onResponderMove}
            onResponderEnd={onResponderEnd}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onScrollBeginDrag={onScrollBeginDrag}
            onScrollEndDrag={onScrollEndDrag}
            renderItem={({ item }) => (
                <SearchItem item={item} onPress={itemOnPress} />
            )}
        />
    )
}

export default ScrollContainer
