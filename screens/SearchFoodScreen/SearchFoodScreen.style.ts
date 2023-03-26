import { StyleSheet } from 'react-native'
import padding from '../../misc/padding'

export default StyleSheet.create({
    DietAddScreen: {
        width: '100%',

        ...padding(16),

        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',

        flex: 1,
    },
    DietAddScreenSearchContainer: {
        width: '100%',
        maxWidth: '100%',

        minHeight: 150,

        ...padding(8),

        borderRadius: 16,

        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        overflow: 'hidden',
    },
    DietAddScreenSearchDiv: {
        width: '100%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        flexBasis: 0,
        flexGrow: 1,
    },
    DietAddScreenListContainer: {
        width: '100%',
        minHeight: 100,

        height: '60%',

        maxHeight: 500,

        ...padding(8),

        borderRadius: 16,

        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        flex: 1,

        overflow: 'hidden',
    },
    DietAddScreenListHeader: {
        width: '100%',

        padding: 8,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    DietAddHeader: {
        width: '100%',

        ...padding(16),
    },
})
