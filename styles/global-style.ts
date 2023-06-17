import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    ScrollContainerParent: {
        flexGrow: 1,
    },
    ScrollContainer: {
        display: 'flex',
        flexGrow: 1,

        padding: 8,
    },
    SpaceBetween: {
        width: '100%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Center: {
        width: '100%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Container: {
        borderRadius: 4,

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
