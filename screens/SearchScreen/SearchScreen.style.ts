import { StyleSheet } from 'react-native'
import padding from '../../misc/padding'

export default StyleSheet.create({
    DietAddScreen: {
        ...padding(16),

        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        flex: 1,
    },
    DietAddScreenSearchContainer: {
        width: '100%',
        minHeight: 100,

        maxHeight: 500,

        ...padding(8),

        borderRadius: 16,

        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        overflow: 'hidden',
    },
    DietAddScreenListContainer: {
        width: '100%',
        minHeight: 150,

        height: '60%',

        maxHeight: 500,

        ...padding(8),

        borderRadius: 16,

        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        flex: 1,

        overflow: 'hidden',
    },
    DietAddHeader: {
        width: '100%',

        ...padding(16),
    },
})
