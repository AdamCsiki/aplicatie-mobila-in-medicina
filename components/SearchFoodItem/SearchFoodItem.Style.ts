import { StyleSheet } from 'react-native'
import padding from '../../misc/padding'

export default StyleSheet.create({
    SearchItem: {
        maxHeight: 100,
        width: '100%',

        padding: 0,

        borderRadius: 16,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    SearchItemImage: {
        minWidth: 45,
        minHeight: 45,

        width: 80,
        height: 80,

        borderRadius: 16,
    },
    SearchItemMainContainer: {
        maxWidth: '50%',

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
    ButtonContainer: {
        height: '100%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    Button: {
        borderWidth: 1,
        borderColor: '#00000000',
    },
    AddButton: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    RemoveButton: {
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
})
