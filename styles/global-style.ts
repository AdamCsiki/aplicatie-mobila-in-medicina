import { StyleSheet } from 'react-native'
import padding from '../misc/padding'

export default StyleSheet.create({
    ScrollContainerParent: {
        flexGrow: 1,
    },
    ScrollContainer: {
        display: 'flex',
        flexGrow: 1,

        ...padding(8),
    },
    Header: {
        width: '100%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Container: {
        borderRadius: 16,

        padding: 16,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        overflow: 'hidden',
    },
    BasicContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        overflow: 'hidden',
    },
    Input: {
        maxWidth: '50%',
        flexGrow: 1,
    },
})
