import { StyleSheet } from 'react-native'
import padding from '../../misc/padding'

export default StyleSheet.create({
    DietScreen: {
        display: 'flex',
        flexGrow: 1,

        ...padding(16),
    },
    StatContainer: {
        width: '100%',
        height: 'auto',

        ...padding(16, 16, 32, 16),

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    StatHeader: {
        width: '100%',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    StatsModalBackdrop: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    StatsModalBackground: {
        width: 300,
        height: 500,

        maxWidth: '100%',
        maxHeight: '100%',

        ...padding(16),

        borderRadius: 16,
    },
    StatsModalHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    StatsEditContainer: {
        width: '100%',

        ...padding(16),
    },
})
