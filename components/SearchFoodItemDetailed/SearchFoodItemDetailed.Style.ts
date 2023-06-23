import { StyleSheet } from 'react-native'
import padding from '../../misc/padding'

export default StyleSheet.create({
    SearchItem: {
        maxHeight: 70,
        width: '100%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        overflow: 'hidden',
    },
    SearchItemMainContainer: {
        height: '100%',

        paddingLeft: 8,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
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
    ButtonContainer: {
        height: '100%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Button: {
        width: 40,
        height: '170%',

        left: 8,

        borderRadius: 8,

        ...padding(2, 8),

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
})
