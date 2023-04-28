import { StyleSheet } from 'react-native'
import padding from '../../misc/padding'

export default StyleSheet.create({
    SearchItem: {
        maxHeight: 100,
        width: '100%',

        borderRadius: 16,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        overflow: 'hidden',
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    Button: {
        width: 40,
        height: '140%',

        left: 8,

        borderRadius: 8,

        ...padding(2, 8),

        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    AddButton: {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,

        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    RemoveButton: {
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,

        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
})
