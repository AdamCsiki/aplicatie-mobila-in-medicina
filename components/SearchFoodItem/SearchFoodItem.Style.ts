import { StyleSheet } from 'react-native'
import padding from '../../misc/padding'

export default StyleSheet.create({
    SearchItem: {
        maxHeight: 256,
        width: '100%',

        borderRadius: 16,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    SearchItemImage: {
        width: 64,
        height: 64,
        borderRadius: 16,
    },
    SearchItemMainContainer: {
        maxWidth: '75%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',

        flexGrow: 1,
    },
    SearchItemHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    SearchItemDetails: {
        width: '100%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',

        flexGrow: 1,
    },
})
